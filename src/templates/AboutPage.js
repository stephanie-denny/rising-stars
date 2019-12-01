import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const AboutPageTemplate = ({
         title,
         subtitle,
         featuredImage,
         section1,
         section2
       }) => (
         <main className="About">
           <PageHeader
             large
             title={title}
             subtitle={subtitle}
             backgroundImage={featuredImage}
           />

           <section className="section">
             <div className="container">
               <Content source={section1} />
             </div>
           </section>
           <section className="section grey">
             <div className="container">
               <Content source={section2} />
             </div>
           </section>
         </main>
       )

// Export Default AboutPage for front-end
const AboutPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <AboutPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  ## Query for AboutPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query AboutPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        section1
        section2
      }
    }
  }
`
