import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import { texts, containers } from '../styles/index'
import BackgroundImage from 'gatsby-background-image'
import Project from '../components/project'
import Img from "gatsby-image"

const Work = () => (
  <>
    <StaticQuery
      query={graphql`
        query WorkImageQuery {
          work: file(relativePath: { eq: "backgrounds/work_bg.png" }) {
            ...background
          }
          project: file(relativePath: { eq: "project1-2.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 1080) {
                ...GatsbyImageSharpFluid
                }
            }
          }
          project2: file(relativePath: { eq: "project1-3.jpg" }) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 1080) {
                ...GatsbyImageSharpFluid
                }
            }
          }
        }
      `}
      render={data => (
        <>
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
              <Project oui="oui" />
              <texts.more>Show me more</texts.more>
            </containers.work>
          </BackgroundImage>
          <containers.content>
            <texts.contentTitle>Product Website</texts.contentTitle>
            <containers.col className="col">
              <containers.row className="row">
                <texts.info>Year</texts.info>
                <texts.text className="paragraphe">2019</texts.text>
              </containers.row>
              <containers.row className="row">
                <texts.info>Rôle</texts.info>
                <texts.text className="paragraphe">UX / UI designer</texts.text>
              </containers.row>
              <containers.row className="row">
                <texts.info>Year</texts.info>
                <texts.text className="paragraphe">
                  This is an educational project carried out as part of my studies at HETIC. The subject was to find a project being funded on Kickstarter and create a website selling this project.
                  <br/><br/>
                  So I chose to work on this project, small edible pellets that respect the environment and the body. The challenge of this project was to address a very limited target audience by transcribing the brand's strong storytelling on the site.
                </texts.text>
              </containers.row>
            </containers.col>
            <containers.col className="col">
              <div className='img'><Img fluid={data.project.childImageSharp.fluid} /></div>
              <texts.text>Part of the model of the home page</texts.text>
            </containers.col>
            <containers.col className="col">
              <div className='img'><Img fluid={data.project2.childImageSharp.fluid} /></div>
              <texts.text>Part of the model of the flavours page</texts.text>
            </containers.col>
            <containers.col className="next">
              <texts.projectTitle>Web application</texts.projectTitle>
              <texts.theme className="paragraphe">UX / UI Design & Branding</texts.theme>
              <texts.button>Next project</texts.button>
            </containers.col>
          </containers.content>
        </>
      )}
    />
  </>
)

export default Work
