/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Header from "./header"
import "./layout.css"
import { texts, containers } from '../styles'

export const logos = graphql`
  fragment logos on File {
    childImageSharp {
      fixed(width: 20, height: 20) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
        dribbble: file(relativePath: { eq: "logos/dribbble.png" }) {
          ...logos
        }
        linkedin: file(relativePath: { eq: "logos/linkedin.png" }) {
          ...logos
        }
        more: file(relativePath: { eq: "logos/more.png" }) {
          ...logos
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
          <containers.logo>
            <Img fixed={data.dribbble.childImageSharp.fixed} alt="Logo dribbble" />
            <Img fixed={data.linkedin.childImageSharp.fixed} alt="Logo linkedin" />
            <Img fixed={data.more.childImageSharp.fixed} alt="" />
          </containers.logo>
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
