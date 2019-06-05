import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { texts, containers } from '../styles/index'
import { StaticQuery, graphql } from "gatsby"

import BackgroundImage from 'gatsby-background-image'

const Home = () => (
  <>
    <StaticQuery
      query={graphql`
        query HomeImageQuery {
          homepage: file(relativePath: { eq: "backgrounds/homepage_bg.png" }) {
            ...background
          }
        }
      `}
      render={data => (
        <BackgroundImage Tag="section"
                                fluid={ data.homepage.childImageSharp.fluid }
                                style={{ 
                                  backgroundPosition: 'top',
                                }}
                                fadeIn='soft'
                >
          <containers.main>
            <SEO title="Home" description="This is my description." />
            <texts.textBig>Hey! I’m Sacha, a digital designer from Paris, focused on UI/UX Design, Illustration & Motion Design. Currently student at HETIC. </texts.textBig>
            <texts.button to="/work">See my work</texts.button>
          </containers.main>
        </BackgroundImage>
      )}
    />
  </>
)

export default Home
