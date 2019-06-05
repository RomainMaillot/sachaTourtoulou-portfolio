import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import { texts, containers } from '../styles/index'
import BackgroundImage from 'gatsby-background-image'
import Project from '../components/project'

const Work = () => (
  <>
    <StaticQuery
      query={graphql`
        query WorkImageQuery {
          work: file(relativePath: { eq: "backgrounds/work_bg.png" }) {
            ...background
          }
        }
      `}
      render={data => (
        <BackgroundImage Tag="section"
                                fluid={ data.work.childImageSharp.fluid }
                                style={{ 
                                  backgroundPosition: 'top',
                                }}
                                fadeIn='soft'
                >
          <containers.work>
            <SEO title="Projects" description="This is my description for my project page." />
            <texts.title>My work</texts.title>
            <Project />
          </containers.work>
        </BackgroundImage>
      )}
    />
  </>
)

export default Work
