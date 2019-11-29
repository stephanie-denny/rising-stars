import React from 'react'
import { Fade } from 'react-slideshow-image'
import './Slideshow.css'
export default class Slideshow extends React.Component {
  static defaultProps = {
    fadeImages: []
  }

  render() {

  const fadeProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false,
    autoplay: true
  }

const { fadeImages } = this.props
  return (
    <Fade {...fadeProperties}>
      {fadeImages.map((slide, index) => (
        <div className="each-fade" key={index}>
          <div
            className="image-container"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
          <h1 className="slide-title">{slide.title}</h1>
          </div>
        </div>
      ))}
    </Fade>
  )
}
}
