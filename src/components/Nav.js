import React, { Component } from 'react'
import { Location } from '@reach/router'
import Logo from './Logo'
import { Link } from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink"
import FA from 'react-fontawesome'

import './Nav.css'

export class Navigation extends Component {
  state = {
    active: false,
    activeSubNav: false,
    currentPath: false
  }

  componentDidMount = () =>
    this.setState({ currentPath: this.props.location.pathname })

  handleMenuToggle = () => this.setState({ active: !this.state.active })

  // Only close nav if it is open
  handleLinkClick = () => this.state.active && this.handleMenuToggle()

  toggleSubNav = subNav =>
    this.setState({
      activeSubNav: this.state.activeSubNav === subNav ? false : subNav
    })

  render() {
    const { active } = this.state,
      // { subNav } = this.props,
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
      <nav className={`Nav ${active ? 'Nav-active' : ''}`}>
        <div className="Nav--Container container">
          <NavLink to="/" onClick={this.handleLinkClick}>
            <Logo />
          </NavLink>
          <div className="Nav--Links">
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'about' ? 'active' : ''
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
                <NavLink

                  to="/why-rising-stars/"
                  className="Nav--GroupLink"
                >
                  Why Rising Stars?
                </NavLink>
                <NavLink to="/faq/" className="Nav--GroupLink">
                  FAQ
                </NavLink>
              </div>
            </div>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'programs' ? 'active' : ''
              }`}
            >
              <NavLink
                to="/programs/"

                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('infants') ||
                  this.props.location.pathname.includes('twos') ||
                  this.props.location.pathname.includes('threes') ||
                  this.props.location.pathname.includes('pre-k')
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
                <NavLink to="/twos/" className="Nav--GroupLink">
                  Twos
                </NavLink>
                <NavLink to="/threes/" className="Nav--GroupLink">
                  Threes
                </NavLink>
                <NavLink to="/pre-k/" className="Nav--GroupLink">
                  Pre-K
                </NavLink>
              </div>
            </div>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'parents' ? 'active' : ''
              }`}
            >
              <NavLink
                to="/parents/"

                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('policies') ||
                  this.props.location.pathname.includes('handbook') ||
                  this.props.location.pathname.includes('calendar') ||
                  this.props.location.pathname.includes('resources')
                    ? 'active'
                    : ''
                }`}
                onMouseEnter={() => this.toggleSubNav('parents')}
              >
                Programs
              </NavLink>

              <div
                className="Nav--GroupLinks"
                onMouseLeave={() => this.toggleSubNav('parents')}
              >
                <NavLink to="/policies/" className="Nav--GroupLink">
                  Policies
                </NavLink>
                <NavLink to="/handbook/" className="Nav--GroupLink">
                  Handbook
                </NavLink>
                <NavLink to="/calendar/" className="Nav--GroupLink">
                  Calendar
                </NavLink>
                <NavLink to="/resources/" className="Nav--GroupLink">
                  Resources
                </NavLink>
              </div>
            </div>
            <NavLink to="/enrollment/">
              Enrollment
            </NavLink>

            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'contact' ? 'active' : ''
              }`}
            >
              <NavLink
                to="/contact/"
                fade
                className={`NavLink Nav--GroupParent ${
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
                <NavLink fade to="/book-a-tour/" className="Nav--GroupLink">
                  Book A Tour
                </NavLink>
              </div>
            </div>
            <a
              href="https://www.facebook.com/risingstarsbilingual/"
              target="_blank" class="SVGIcon"
            >
              <FA name="facebook" />
            </a>
            <a class="Button" href="tel:+17372260768">Call Now: (737) 226-0768</a>
          </div>
        </div>
      </nav>
    )
  }
}

export default ({ subNav }) => (
  <Location>{route => <Navigation subNav={subNav} {...route} />}</Location>
)
