import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Marked from 'react-markdown'
import PropTypes from 'prop-types'
import Image from './Image'

import './Content.css'

const encodeMarkdownURIs = (source = '') => {
  const markdownLinkRegex = /\[(.+)\]\((.+)(".+)\)/g
  console.log(source)
  return source.replace(markdownLinkRegex, (match, linkURI) => {
    if (!linkURI) return match
    const replaced = match.replace(linkURI, encodeURI(linkURI))
    return replaced
  })
}

const withContentImages = source => {
  const images = source.match(/<img(.*?)\\?>/gim)

  for (let i in images) {
    const src = /src="(.*?)"/g.exec(images[i]),
      alt = /alt="(.*?)"/g.exec(images[i]),
      title = /title="(.*?)"/g.exec(images[i])
    source = source.replace(
      images[i],
      ReactDOMServer.renderToStaticMarkup(
        <Image
          resolutions="medium"
          className="Content--Image"
          lazy={false}
          src={src ? src[1] : null}
          alt={alt ? alt[1] : null}
          title={title ? title[1] : null}
        />
      )
    )
  }

  return source
}

const MyImage = ({ nodeKey, src, title, alt }) => {
  const decodedSrc = decodeURI(src)
  return (
    <Image
      className="Content--Image markdown-preview"
      resolutions="medium"
      lazy={false}
      src={decodedSrc}
      title={title}
      alt={alt}
    />
  )
}

const HtmlBlock = ({ value }) => {
  if (value.indexOf('<iframe') !== 0) return value
  return (
    <div
      className={`Content--Iframe`}
      dangerouslySetInnerHTML={{
        __html: value
      }}
    />
  )
}

const Content = ({ source, src, bgImg, link, linkText, className = '' }) => {
  // accepts either html or markdown
  source = source || src || ''
  if (source.match(/^</)) {
    source = withContentImages(source)

    return (
      <div
        className={`Content ${className}`}
        dangerouslySetInnerHTML={{ __html: source }}
        style={{ backgroundImage: `url(${bgImg})` }}
      />
    )
  }

  return (
    <div
      className={`Content ${className}`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Marked
        source={encodeMarkdownURIs(source)}
        renderers={{
          image: MyImage,
          html: HtmlBlock
        }}
      />{!!link && (<a href={link} className="Button">{linkText}</a>)}

    </div>
  )
}

Content.propTypes = {
  source: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string
}

export default Content
