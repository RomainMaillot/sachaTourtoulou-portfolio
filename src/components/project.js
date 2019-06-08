import { Link } from "gatsby"
import React, { Component } from "react"
import { texts, containers } from '../styles';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

class Project extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            name: "",
            email: "",
            message: "",
        }
    }

    render() {
        return(
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
                        <div className='img-after'><Img fluid={data.placeholderImage.childImageSharp.fluid} /></div>
                    </containers.project>
                }
            />
        )
    }
}

export default Project