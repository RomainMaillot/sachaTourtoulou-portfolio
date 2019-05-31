import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { texts, containers } from '../styles';

const Header = ({ siteTitle }) => (
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
        <Link
          to="/page-2"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          About
        </Link>
        <Link
          to="/work"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Work
        </Link>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          Contact
        </Link>
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
