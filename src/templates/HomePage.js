import React from 'react'
import { graphql } from 'gatsby'
import Slideshow from '../components/Slideshow'
import Layout from '../components/Layout'
import AboutSection from '../components/AboutSection'
import ProgramsSection from '../components/ProgramsSection'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ slides, about, programs }) => (
         <main className="Home">
           <Slideshow fadeImages={slides} />
           <div className="divider"></div>
            <AboutSection about={about} />
            <ProgramsSection programs={programs} />
         </main>
       )

// Export Default HomePage for front-end
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
              programs{
                image
                title
              }
             }
           }
         }
       `
