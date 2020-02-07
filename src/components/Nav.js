import React, { Component } from 'react'
import { Location } from '@reach/router'
import Logo from './Logo'
import { Link } from 'gatsby'
import { Menu, X } from 'react-feather'
import { isMobile } from 'react-device-detect'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import FA from 'react-fontawesome'

import './Nav.css'

export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false,
    isTop: true
  }

  componentDidMount () {
    this.setState({ currentPath: this.props.location.pathname })

   document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    })
  }

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })

  render() {
    const { active } = this.state,
      NavLink = ({ to, className, children, ...props }) => (
        <AniLink
          fade
          to={to}
          className={`NavLink ${
            to === this.state.currentPath ? 'active' : ''
          } ${className}`}
          onClick={this.handleLinkClick}
          {...props}
        >
          {children}
        </AniLink>
      )

    return (
      <nav
        className={`Nav ${active ? 'Nav-active' : ''} ${
          this.state.isTop ? '' : 'fixed'
        }`}
      >
        <div className="Nav--Container container">
          <NavLink
            to="/"
            onClick={this.handleLinkClick}
            aria-label="Rising Stars Bilingual Learning Center Home"
          >
            <Logo />
          </NavLink>
          <div className="Nav--Links">
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'about' || isMobile ? 'active' : ''
              }`}
            >
              <NavLink
                to="/about/"
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('philosophy') ||
                  this.props.location.pathname.includes('why-rising-stars') ||
                  this.props.location.pathname.includes('faq')
                    ? 'active'
                    : ''
                }`}
                onMouseEnter={() => this.toggleSubNav('about')}
              >
                About
              </NavLink>
              <div
                className="Nav--GroupLinks"
                onMouseLeave={() => this.toggleSubNav('about')}
              >
                <NavLink to="/philosophy/" className="Nav--GroupLink">
                  Philosophy
                </NavLink>
                <NavLink to="/why-rising-stars/" className="Nav--GroupLink">
                  Why Rising Stars?
                </NavLink>
                <NavLink to="/faq/" className="Nav--GroupLink">
                  FAQ
                </NavLink>
              </div>
            </div>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'programs' || isMobile
                  ? 'active'
                  : ''
              }`}
            >
              <NavLink
                to="/programs/"
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('infants') ||
                  this.props.location.pathname.includes('ones') ||
                  this.props.location.pathname.includes('twos') ||
                  this.props.location.pathname.includes('threes')
                    ? 'active'
                    : ''
                }`}
                onMouseEnter={() => this.toggleSubNav('programs')}
              >
                Programs
              </NavLink>

              <div
                className="Nav--GroupLinks"
                onMouseLeave={() => this.toggleSubNav('programs')}
              >
                <NavLink to="/infants/" className="Nav--GroupLink">
                  Infants
                </NavLink>
                <NavLink to="/ones/" className="Nav--GroupLink">
                  Toddlers
                </NavLink>
                <NavLink to="/twos/" className="Nav--GroupLink">
                  Early Preschool
                </NavLink>
                <NavLink to="/threes/" className="Nav--GroupLink">
                  Preschool
                </NavLink>
              </div>
            </div>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'parents' || isMobile
                  ? 'active'
                  : ''
              }`}
            >
              <NavLink
                to="/parents/"
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('policies') ||
                  this.props.location.pathname.includes('resources')
                    ? 'active'
                    : ''
                }`}
                onMouseEnter={() => this.toggleSubNav('parents')}
              >
                Parents
              </NavLink>

              <div
                className="Nav--GroupLinks"
                onMouseLeave={() => this.toggleSubNav('parents')}
              >
                <NavLink to="/policies/" className="Nav--GroupLink">
                  Policies
                </NavLink>
                <NavLink to="/resources/" className="Nav--GroupLink">
                  Resources
                </NavLink>
              </div>
            </div>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'contact' ? 'active' : ''
              } ${isMobile ? 'hide' : ''}`}
            >
              <NavLink
                to="/contact/"
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('enrollment') ||
                  this.props.location.pathname.includes('book-a-tour')
                    ? 'active'
                    : ''
                }`}
                onMouseEnter={() => this.toggleSubNav('contact')}
              >
                Contact
              </NavLink>

              <div
                className="Nav--GroupLinks"
                onMouseLeave={() => this.toggleSubNav('contact')}
              >
                <NavLink to="/enrollment/" className="Nav--GroupLink">
                  Enrollment
                </NavLink>
                <NavLink to="/book-a-tour/" className="Nav--GroupLink">
                  Book A Tour
                </NavLink>
              </div>
            </div>
            <NavLink className={isMobile ? '' : 'hide'} to="/enrollment/">
              Enrollment
            </NavLink>
            <NavLink className={isMobile ? '' : 'hide'} to="/contact/">
              Contact
            </NavLink>
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
            <a className="Button" href="tel:+17372260768">
              Call: (737) 226-0768
            </a>
            <Link className="Button" to="/book-a-tour">
              Book Tour
            </Link>
          </div>
          <button
            className="Button-blank Nav--MenuButton"
            onClick={this.handleMenuToggle}
          >
            {active ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
    )
  }
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
