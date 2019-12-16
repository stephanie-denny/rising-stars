import React from 'react'
import { graphql } from 'gatsby'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import ContentSplit from '../components/ContentSplit'
import Layout from '../components/Layout'
import './ProgramsPage.css'

// Export Template for use in CMS preview
export const ProgramsPageTemplate = ({
         title,
         subtitle,
         featuredImage,
         section1,
         blades,
         overview
       }) => (
         <main className="Programs">
           <PageHeader
             large
             title={title}
             subtitle={subtitle}
             backgroundImage={featuredImage}
           />
           {!!overview && (
             <section className="section grey text-center">
               <div className="container">
                 <ContentSplit source={overview} />
               </div>
             </section>
           )}
           {!!section1 && (
             <section className="section grey text-center">
               <div className="container">
                 <Content source={section1} />
               </div>
             </section>
           )}
           {!!blades &&
             blades.map((blade, index) => (
               <div key={index}>
                 {!!blade.leftText && (
                   <section className="section p-0 border-0">
                     <div className="container-fluid p-0">
                       <Row>
                         <Content
                           source={blade.leftText}
                           bgImg={blade.leftBgImg}
                           link={blade.leftLink}
                           linkText={blade.leftLinkText}
                           className={
                             (blade.leftTextDark ? 'Dark' : 'Light') +
                             ' col-12 col-md-8 Blade'
                           }
                         />
                         <Col className="col-12 col-md-4 p-0 d-none d-sm-block">
                           <img
                             className="img-fluid"
                             src={blade.leftImg}
                             alt=""
                           />
                         </Col>
                       </Row>
                     </div>
                   </section>
                 )}
                 {!!blade.rightText && (
                   <section className="section p-0 border-0">
                     <div className="container-fluid p-0">
                       <Row>
                         <Col className="col-12 col-md-4 p-0 d-none d-sm-block">
                           <img
                             className="img-fluid"
                             src={blade.rightImg}
                             alt=""
                           />
                         </Col>
                         <Content
                           source={blade.rightText}
                           bgImg={blade.rightBgImg}
                           link={blade.rightLink}
                           linkText={blade.rightLinkText}
                           className={
                             (blade.rightTextDark ? 'Dark' : 'Light') +
                             ' col-12 col-md-8 Blade'
                           }
                         />
                       </Row>
                     </div>
                   </section>
                 )}
               </div>
             ))}
         </main>
       )

// Export Default ProgramsPage for front-end
const ProgramsPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <ProgramsPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ProgramsPage

export const pageQuery = graphql`
         ## Query for ProgramsPage data
         ## Use GraphiQL interface (http://localhost:8000/___graphql)
         ## $id is processed via gatsby-node.js
         ## query name must be unique to this file
         query ProgramsPage($id: String!) {
           page: markdownRemark(id: { eq: $id }) {
             ...Meta
             html
             frontmatter {
               title
               subtitle
               featuredImage
               section1
               blades {
                 leftText
                 leftBgImg
                 leftImg
                 leftLink
                 leftLinkText
                 leftTextDark
                 rightText
                 rightBgImg
                 rightImg
                 rightLink
                 rightLinkText
                 rightTextDark
               }
               overview {
                 text
                 image
                 link
                 linkText
               }
             }
           }
         }
       `
