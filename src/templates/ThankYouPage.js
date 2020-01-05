import React from 'react'
import { graphql } from 'gatsby'
import Row from 'react-bootstrap/Row'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const ThankYouPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  body
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
            <Content source={body} />
          </Row>
        </div>
      </section>
  </main>
)

// Export Default ThankYouPage for front-end
const ThankYouPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <ThankYouPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ThankYouPage

export const pageQuery = graphql`
         ## Query for ThankYouPage data
         ## Use GraphiQL interface (http://localhost:8000/___graphql)
         ## $id is processed via gatsby-node.js
         ## query name must be unique to this file
         query ThankYouPage($id: String!) {
           page: markdownRemark(id: { eq: $id }) {
             ...Meta
             html
             frontmatter {
               title
               subtitle
               featuredImage
             }
           }
         }
       `
