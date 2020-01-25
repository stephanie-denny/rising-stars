import React from 'react'
import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'

import './cms-utils'

import { HomePageTemplate } from '../templates/HomePage'
import { AboutPageTemplate } from '../templates/AboutPage'
import { ContactPageTemplate } from '../templates/ContactPage'
import { ParentsPageTemplate } from '../templates/ParentsPage'
import { ProgramsPageTemplate } from '../templates/ProgramsPage'
import { ThankYouPageTemplate } from '../templates/ThankYouPage'

if (
  window.location.hostname === 'localhost' &&
  window.localStorage.getItem('netlifySiteURL')
) {
  CMS.registerPreviewStyle(
    window.localStorage.getItem('netlifySiteURL') + '/styles.css'
  )
} else {
  CMS.registerPreviewStyle('/styles.css')
}

CMS.registerPreviewTemplate('home-page', ({ entry }) => (
  <HomePageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('about-page', ({ entry }) => (
  <AboutPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('contact-page', ({ entry }) => (
  <ContactPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('parents-page', ({ entry }) => (
  <ParentsPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('programs-page', ({ entry }) => (
  <ProgramsPageTemplate {...entry.toJS().data} />
))
CMS.registerPreviewTemplate('thankyou-page', ({ entry }) => (
  <ThankYouPageTemplate {...entry.toJS().data} />
))
CMS.registerMediaLibrary(uploadcare)
