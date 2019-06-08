import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { texts, containers } from '../styles';
import MenuToggle from '../components/toggle'

const Header = ({ siteTitle, location }) => (
  <containers.header>
      <texts.title header>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </texts.title>
      <containers.nav>
        <MenuToggle />
        <texts.headerLink
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          active={location.pathname === "/about" ? 'true' : ''}
        >
          About
        </texts.headerLink>
        <texts.headerLink
          to="/work"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          active={location.pathname === "/work" ? 'true' : ''}
        >
          Work
        </texts.headerLink>
        <texts.headerLink
          to="/contact"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          active={location.pathname === "/contact" ? 'true' : ''}
        >
          Contact
        </texts.headerLink>
      </containers.nav>
  </containers.header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
