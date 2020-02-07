import React from 'react'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './ParentsPage.css'

// Export Template for use in CMS preview
export const ParentsPageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Parents">
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

// Export Default ParentsPage for front-end
const ParentsPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <ParentsPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ParentsPage

export const pageQuery = graphql`
  ## Query for ParentsPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query ParentsPage($id: String!) {
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
