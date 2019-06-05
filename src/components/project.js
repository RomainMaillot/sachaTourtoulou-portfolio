import { Link } from "gatsby"
import React from "react"
import { texts, containers } from '../styles';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Project = () => (
    <StaticQuery
        query={graphql`
        query ProjectImage{
            placeholderImage: file(relativePath: { eq: "projet1.jpg" }) {
                childImageSharp {
                    fixed(width: 100, height: 100) {
                    ...GatsbyImageSharpFixed
                    }
                }
            }
        }
        `}
        render={data => 
            <>
                <texts.title>Project 1</texts.title>
                <Img fixed={data.placeholderImage.childImageSharp.fixed} />
            </>
        }
  />
)

export default Project
