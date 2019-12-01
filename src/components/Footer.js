import React from 'react'
import { Link } from 'gatsby'
import Logo from './Logo'
import FA from 'react-fontawesome'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="footer-links">
        <div className="container">
          <div className="col">
            <ul className="footer-menu">
              <li>
                <Link to="/" aria-label="Rising Stars Bilingual Learning Center Home">
                  <Logo />
                </Link>
              </li>
              <li className="footer-menu__title">
                <Link to="/">Rising Stars Bilingual Learning Center</Link>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/risingstarsbilingual/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="SVGIcon"
                  aria-label="Rising Stars Facebook Page"
                >
                  <FA name="facebook" className="SVGIcon--icon" />
                </a>
                <a
                  href="https://www.yelp.com/biz/rising-stars-bilingual-daycare-manchaca-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="SVGIcon"
                  aria-label="Rising Stars Yelp Page"
                >
                  <FA name="yelp" className="SVGIcon--icon" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col ml-5">
            <ul className="footer-menu">
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/programs">Programs</Link>
              </li>
              <li>
                <Link to="/parents">Current Parents</Link>
              </li>
              <li>
                <Link to="/enrollment">How to Enroll</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="footer-menu">
              <li>
                <a href="tel:+17372260768">Call: (737) 226-0768</a>
              </li>
              <li className="footer-menu__address">
                <a
                  href="https://goo.gl/maps/QrgCANfTutVutyZa6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  11406 Conroy Ln, <br />
                  Manchaca, TX 78652
                </a>
              </li>
              <li>
                <Link to="/employment">Employment</Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <ul className="footer-menu">
              <li>
                <Link className="Button Button-secondary" to="/book-a-tour">
                  Book Tour
                </Link>
              </li>
              <li>
                <Link className="Button Button-secondary" to="/join-waitlist">
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-credits">
        <div className="container taCenter">
          <span>
            © Copyright {new Date().getFullYear()} Rising Stars Bilingual
            Learning Center. All rights reserved. Made with &hearts; by{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://hirestephanie.today"
            >
              Stephanie Denny
            </a>
            .
          </span>
        </div>
      </div>
    </footer>
  </div>
)
