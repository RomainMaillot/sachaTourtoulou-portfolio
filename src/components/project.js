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
                    fluid(quality: 90, maxWidth: 1080) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        `}
        render={data => 
            <containers.project>
                <div className='img'><Img fluid={data.placeholderImage.childImageSharp.fluid} /></div>
                <containers.row>
                    <containers.col>
                        <texts.projectTitle>Product website • 2019</texts.projectTitle>
                        <texts.theme>UX / UI Design</texts.theme>
                    </containers.col>
                    <texts.number>01/02</texts.number>
                </containers.row>
            </containers.project>
        }
  />
)

export default Project