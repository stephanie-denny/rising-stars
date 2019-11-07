import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const FAQPageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="About">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
  </main>
)

// Export Default FAQPage for front-end
const FAQPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <FAQPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default FAQPage

export const pageQuery = graphql`
  ## Query for FAQPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query FAQPage($id: String!) {
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
