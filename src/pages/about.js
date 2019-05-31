import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyles from '../styles/global'
import { texts, containers } from '../styles/index'

const SecondPage = () => (
  <StaticQuery
    query={graphql`
      query ImageQuery {
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
    render={data => (<Layout>
        <SEO title="About" />
        <GlobalStyles />
        <texts.title>About me</texts.title>
        <texts.description>Hi there! I’m Sacha Tourtoulou, a digital designer from Paris, France. I’m focused on UI/UX Design, Illustration & Motion Design and I also appreciate Photography, Branding and Print.

        Currently student at HETIC, I’m looking for a 2 month internship from August 2019 in Paris.

        Feel free to contact me! </texts.description>
        <containers.logos>
          <a href="https://dribbble.com/" target="_blank"><Img fixed={data.dribbble.childImageSharp.fixed} alt="Logo dribbble" /></a> 
          <a href="https://linkedin.com/" target="_blank"><Img fixed={data.linkedin.childImageSharp.fixed} alt="Logo linkedin" /></a>
          <a href="#" target="_blank"><Img fixed={data.more.childImageSharp.fixed} alt="" /></a>
        </containers.logos>
        <texts.button>My resume</texts.button>
    </Layout>)}
  />
)

export default SecondPage
