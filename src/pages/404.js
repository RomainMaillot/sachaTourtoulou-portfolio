import React from "react"

import SEO from "../components/seo"
import { texts, containers } from '../styles/index'
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

const NotFoundPage = () => (
  <>
    <StaticQuery
      query={graphql`
        query ErrorImageQuery {
          homepage: file(relativePath: { eq: "backgrounds/404_bg.jpg" }) {
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
          <containers.error>
            <SEO title="404: Not found" />
            <texts.textBig>Oops !</texts.textBig>
            <texts.textBig>This page doesn&#39;t exist</texts.textBig>
            <texts.button to="/work">See my work</texts.button>
          </containers.error>
        </BackgroundImage>
      )}
    />
</>
)

export default NotFoundPage
