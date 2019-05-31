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

import BackgroundImage from 'gatsby-background-image'

export const logos = graphql`
  fragment logos on File {
    childImageSharp {
      fixed(width: 20, height: 20) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const background = graphql
`fragment background on File {
    childImageSharp {
      fluid(quality: 90, maxHeight: 1080) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }`

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
        homepage: file(relativePath: { eq: "backgrounds/homepage_bg.png" }) {
          ...background
        }
        about: file(relativePath: { eq: "backgrounds/about_bg.png" }) {
          ...background
        }
      }
    `}
    render={data => (
      <>
        <BackgroundImage Tag="section"
                          fluid={ children[0].props.title === 'Home' ? data.homepage.childImageSharp.fluid : data.about.childImageSharp.fluid }
                          style={{ 
                            backgroundPosition: 'top',
                            backgroundSize: 'contain',
                          }}
          >
          <Header siteTitle={data.site.siteMetadata.title} />
          <containers.main about={ children[0].props.title === 'About' ? true : false }>{children}</containers.main>
        </BackgroundImage>
        <containers.footer>
          <containers.logo>
            <a href="https://dribbble.com/" target="_blank"><Img fixed={data.dribbble.childImageSharp.fixed} alt="Logo dribbble" /></a> 
            <a href="https://linkedin.com/" target="_blank"><Img fixed={data.linkedin.childImageSharp.fixed} alt="Logo linkedin" /></a>
            <a href="#" target="_blank"><Img fixed={data.more.childImageSharp.fixed} alt="" /></a>
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
