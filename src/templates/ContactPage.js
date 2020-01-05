import React from 'react'
import { MapPin, Smartphone, Mail } from 'react-feather'
import { graphql } from 'gatsby'

import PageHeader from '../components/PageHeader'
import FormSimpleAjax from '../components/FormSimpleAjax'
import FormBookTourAjax from '../components/FormBookTourAjax'
import Content from '../components/Content'
import GoogleMap from '../components/GoogleMap'
import Layout from '../components/Layout'
import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({
         slug,
         body,
         title,
         subtitle,
         featuredImage,
         address,
         phone,
         email,
         locations
       }) => (
         <main className="Contact">
           <PageHeader
             title={title}
             subtitle={subtitle}
             backgroundImage={featuredImage}
           />
           <section className="section Contact--Section1">
             <div className="container Contact--Section1--Container">
               <div>
                 <Content source={body} />
                 <div className="Contact--Details">
                   {address && (
                     <a
                       className="Contact--Details--Item"
                       href={`https://www.google.com.au/maps/search/${encodeURI(
                         address
                       )}`}
                       target="_blank"
                       rel="noopener noreferrer"
                     >
                       <MapPin /> {address}
                     </a>
                   )}
                   {phone && (
                     <a
                       className="Contact--Details--Item"
                       href={`tel:${phone}`}
                     >
                       <Smartphone /> {phone}
                     </a>
                   )}
                   {email && (
                     <a
                       className="Contact--Details--Item"
                       href={`mailto:${email}`}
                     >
                       <Mail /> {email}
                     </a>
                   )}
                 </div>
               </div>

               <div>
                 {slug === 'contact' ? (
                   <FormSimpleAjax name="Contact Rising Stars" />
                   ) : slug === 'book-a-tour' ?
                   (<FormBookTourAjax name="Book A Tour With Rising Stars" />)
                   : ''
                 }
               </div>
             </div>
           </section>

           <GoogleMap locations={locations} />
         </main>
       )

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        slug
        title
        template
        subtitle
        featuredImage
        address
        phone
        email
        locations {
          mapLink
          lat
          lng
        }
      }
    }
  }
`
