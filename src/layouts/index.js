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

import GlobalStyles from '../styles/global'
import Header from "../components/header"
import { texts, containers } from '../styles'

import Transition from '../components/transition'

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

const Layout = ({ children, location }) => (
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
        <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} location={location}/>
        <Transition location={location}>
          {children}
        </Transition>
        <containers.footer>
          <containers.logo>
            <a href="https://dribbble.com/sachatourtoulou" target="_blank" rel="noopener noreferrer"><Img fixed={data.dribbble.childImageSharp.fixed} alt="Logo dribbble" /></a> 
            <a href="https://www.linkedin.com/in/sachatourtoulou/" target="_blank" rel="noopener noreferrer"><Img fixed={data.linkedin.childImageSharp.fixed} alt="Logo linkedin" /></a>
            <a href="https://www.flickr.com/photos/sachatourtoulou/" target="_blank" rel="noopener noreferrer"><Img fixed={data.more.childImageSharp.fixed} alt="" /></a>
          </containers.logo>
          <texts.footer>
            © {new Date().getFullYear()}, Sacha Tourtoulou. All rights reserved.
          </texts.footer>
          <texts.footer>
            sachatourtoulou.fr
          </texts.footer>
          <texts.credits>
            Built by <a href="https://www.romain-maillot.netlify.com" target="_blank">Romain Maillot</a>
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
