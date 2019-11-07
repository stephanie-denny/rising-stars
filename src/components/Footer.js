import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} Rising Stars Bilingual Learning Center. All rights reserved. Made with &hearts; by{' '}
          <a target="_blank" href="https://hirestephanie.today">Stephanie Denny</a>.
        </span>
      </div>
    </footer>
  </div>
)
