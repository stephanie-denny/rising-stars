import React, { Component } from 'react'
import { Location } from '@reach/router'
import { Link } from 'gatsby'
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
          <AniLink to="/" fade onClick={this.handleLinkClick}>
            <Logo />
          </AniLink>
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
            {/* <div
              className={`Nav--Group ${
                this.state.activeSubNav === 'posts' ? 'active' : ''
              }`}
            >
              <span
                className={`NavLink Nav--GroupParent ${
                  this.props.location.pathname.includes('posts') ||
                  this.props.location.pathname.includes('blog') ||
                  this.props.location.pathname.includes('post-categories')
                    ? 'active'
                    : ''
                }`}
                onClick={() => this.toggleSubNav('posts')}
              >
                Blog
              </span>
              <div className="Nav--GroupLinks">
                <NavLink to="/blog/" className="Nav--GroupLink">
                  All Posts
                </NavLink>
                {subNav.posts.map((link, index) => (
                  <NavLink
                    to={link.slug}
                    key={'posts-subnav-link-' + index}
                    className="Nav--GroupLink"
                  >
                    {link.title}
                  </NavLink>
                ))}
              </div>
            </div>*/}
            <AniLink fade to="/contact/">
              Contact
            </AniLink>
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
