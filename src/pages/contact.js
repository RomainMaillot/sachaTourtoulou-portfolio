import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import SEO from "../components/seo"
import Form from "../components/form"

import { texts, containers } from '../styles/index'

import BackgroundImage from 'gatsby-background-image'

const Contact = () => (
  <>
  <StaticQuery
    query={graphql`
      query ContactImageQuery {
        contact: file(relativePath: { eq: "backgrounds/contact_bg.png" }) {
          ...background
        }
      }
    `}
    render={data => (
      <BackgroundImage Tag="section"
                          fluid={ data.contact.childImageSharp.fluid }
                          style={{ 
                            backgroundPosition: 'top',
                          }}
                          fadeIn='soft'
          >
        <containers.contact>
          <SEO title="Contact" />
          <texts.title>Contact me</texts.title>
          <Form oui="oui"/>
        </containers.contact>
      </BackgroundImage>
        )}
  />
  </>
)

export default Contact
