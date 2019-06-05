import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"

import { texts, containers } from '../styles/index'

import BackgroundImage from 'gatsby-background-image'

const About = () => (
  <>
  <StaticQuery
    query={graphql`
      query AboutImageQuery {
        dribbble: file(relativePath: { eq: "logos/dribbble.png" }) {
          ...logos
        }
        linkedin: file(relativePath: { eq: "logos/linkedin.png" }) {
          ...logos
        }
        more: file(relativePath: { eq: "logos/more.png" }) {
          ...logos
        }
        about: file(relativePath: { eq: "backgrounds/about_bg.png" }) {
          ...background
        }
      }
    `}
    render={data => (
      <BackgroundImage Tag="section"
                          fluid={ data.about.childImageSharp.fluid }
                          style={{ 
                            backgroundPosition: 'top',
                          }}
                          fadeIn='soft'
          >
        <containers.about>
          <SEO title="About" />
          <texts.title>About me</texts.title>
          <div>
            <texts.description>Hi there! I’m Sacha Tourtoulou, a digital designer from Paris, France. I’m focused on UI/UX Design, Illustration & Motion Design and I also appreciate Photography, Branding and Print.</texts.description>
            <texts.description>Currently student at HETIC, I’m looking for a 2 month internship from August 2019 in Paris.</texts.description>
            <texts.description>Feel free to contact me! </texts.description>
          </div>
          <containers.logos>
            <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer"><Img fixed={data.dribbble.childImageSharp.fixed} alt="Logo dribbble" /></a> 
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><Img fixed={data.linkedin.childImageSharp.fixed} alt="Logo linkedin" /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><Img fixed={data.more.childImageSharp.fixed} alt="" /></a>
          </containers.logos>
          <texts.button>My resume</texts.button>
        </containers.about>
      </BackgroundImage>
        )}
  />
  </>
)

export default About
