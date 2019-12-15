import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'
import Nav from './Nav'
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button'
import BookTour from '../components/BookTour'
import WaitList from '../components/WaitList'
import Testimonials from '../components/TestimonialSlider'
import Footer from './Footer'

import 'modern-normalize/modern-normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globalStyles.css'

export default ({ children, meta, title }) => {
  return (
    <StaticQuery
      query={graphql`
        query IndexLayoutQuery {
          settingsYaml {
            siteTitle
            siteDescription
            googleTrackingId
            socialMediaCard {
              image
            }
            tour {
              bgimage
              title
              subtitle
              altimg
            }
            waitlist {
              bgimage
              title
              text
            }
            testimonials {
              text
              name
            }
            testimonialsBg
          }
        }
      `}
      render={data => {
        const {
          siteTitle,
          socialMediaCard,
          googleTrackingId,
          tour,
          waitlist,
          testimonials,
          testimonialsBg
        } = data.settingsYaml || {}

        return (
          <Fragment>
            <Helmet
              defaultTitle={siteTitle}
              titleTemplate={`%s | ${siteTitle}`}
              htmlAttributes={{ lang: 'en' }}
            >
              {title}
              <link href="https://ucarecdn.com" rel="preconnect" crossorigin />
              <link rel="dns-prefetch" href="https://ucarecdn.com" />
              <link
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                rel="stylesheet"
              />
              {/* Add font link tags here */}
            </Helmet>

            <Meta
              googleTrackingId={googleTrackingId}
              absoluteImageUrl={
                socialMediaCard &&
                socialMediaCard.image &&
                socialMediaCard.image
              }
              {...meta}
              {...data.settingsYaml}
            />

            <Nav />

            <Fragment>{children}</Fragment>
            <BookTour tour={tour} />
            <WaitList waitlist={waitlist} />
            <Testimonials
              testimonials={testimonials}
              background={testimonialsBg}
            />
            <div role="complementary">
              <ScrollUpButton />
            </div>
            <div className="divider"></div>
            <Footer />
          </Fragment>
        )
      }}
    />
  )
}
