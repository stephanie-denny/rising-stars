import React from 'react'
import { graphql } from 'gatsby'
import { isMobile } from 'react-device-detect'
import PageHeader from '../components/PageHeader'
import Slideshow from '../components/Slideshow'
import Layout from '../components/Layout'
import AboutSection from '../components/AboutSection'
import ProgramsSection from '../components/ProgramsSection'
import BookTour from '../components/BookTour'
import WaitList from '../components/WaitList'
import Testimonials from '../components/TestimonialSlider'

export const HomePageTemplate = ({ title, subtitle, featuredImage, slides, about, programs, tour, waitlist, testimonials }) => (
         <main className="Home">
           {isMobile ? (
             <PageHeader
               large
               title={title}
               subtitle={subtitle}
               backgroundImage={featuredImage}
             />
           ) : (
             <Slideshow fadeImages={slides} />
           )}
           <div className="divider"></div>
           <AboutSection about={about} />
           <ProgramsSection programs={programs} />
           <BookTour tour={tour} />
           <WaitList waitlist={waitlist} />
           <Testimonials testimonials={testimonials} />
         </main>
       )

const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
         ## Query for HomePage data
         ## Use GraphiQL interface (http://localhost:8000/___graphql)
         ## $id is processed via gatsby-node.js
         ## query name must be unique to this file
         query HomePage($id: String!) {
           page: markdownRemark(id: { eq: $id }) {
             ...Meta
             html
             frontmatter {
               title
               subtitle
               featuredImage
               slides {
                 image
                 title
               }
               about {
                 title
                 subtitle
                 text
                 col {
                   icon
                   title
                   text
                 }
               }
               programs {
                 image
                 title
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
             }
           }
         }
       `
