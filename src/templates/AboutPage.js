import React from 'react'
import { graphql } from 'gatsby'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const AboutPageTemplate = ({
         title,
         subtitle,
         featuredImage,
         section1,
         section1img,
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
               <Row>
                 <Col className="col-12 col-md-9">{section1}</Col>
                 <Col className="col-md-3 d-none d-sm-block">
                   <img
                     className="img-fluid img-thumbnail"
                     src={section1img}
                     alt=""
                   />
                 </Col>
               </Row>
             </div>
           </section>
           {!!section2 && (
             <section className="section grey">
               <div className="container">
                 <Content source={section2} />
               </div>
             </section>
           )}
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
        section1img
        section2
      }
    }
  }
`
