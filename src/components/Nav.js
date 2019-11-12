import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Menu, X } from 'react-feather'
import Logo from './Logo'
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
          <NavLink to="/" fade onClick={this.handleLinkClick}>
            <Logo />
          </NavLink>
          <div className="Nav--Links">
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'about' ? 'active' : ''
              }`}
            >
              <AniLink
                to="/about/"
                fade
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('philosophy') ||
                  this.props.location.pathname.includes('why-rising-stars') ||
                  this.props.location.pathname.includes('faq')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('about')}
              >
                About
              </AniLink>

              <div className="Nav--GroupLinks">
                <AniLink fade to="/philosophy/" className="Nav--GroupLink">
                  Philosophy
                </AniLink>
                <AniLink
                  fade
                  to="/why-rising-stars/"
                  className="Nav--GroupLink"
                >
                  Why Rising Stars?
                </AniLink>
                <AniLink fade to="/faq/" className="Nav--GroupLink">
                  FAQ
                </AniLink>
              </div>
            </div>
            <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'programs' ? 'active' : ''
              }`}
            >
              <NavLink
                to="/programs/"
                fade
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('infants') ||
                  this.props.location.pathname.includes('twos') ||
                  this.props.location.pathname.includes('threes') ||
                  this.props.location.pathname.includes('pre-k')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('programs')}
              >
                Programs
              </NavLink>

              <div className="Nav--GroupLinks">
                <NavLink fade to="/infants/" className="Nav--GroupLink">
                  Infants
                </NavLink>
                <NavLink fade to="/twos/" className="Nav--GroupLink">
                  Twos
                </NavLink>
                <NavLink fade to="/threes/" className="Nav--GroupLink">
                  Threes
                </NavLink>
                <NavLink fade to="/pre-k/" className="Nav--GroupLink">
                  Pre-K
                </NavLink>
              </div>
            </div>

            <NavLink fade to="/contact/">
              Contact
            </NavLink>
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
