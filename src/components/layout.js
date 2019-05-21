/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { texts, containers } from '../styles';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <containers.main>{children}</containers.main>
        </div>
        <containers.footer>
          <texts.footer bold>
            © {new Date().getFullYear()}, Sacha Tourtoulou. All rights reserved.
          </texts.footer>
          <texts.footer>
            sachatourtoulou.fr
          </texts.footer>
          <texts.credits>
            Built by <a href="https://www.romain-maillot.netlify.com">Romain Maillot</a>
          </texts.credits>
        </containers.footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
