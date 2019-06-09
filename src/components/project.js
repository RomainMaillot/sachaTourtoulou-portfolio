import { Link } from "gatsby"
import React, { Component } from "react"
import { texts, containers } from '../styles';
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import BackgroundImage from 'gatsby-background-image'

class Project extends Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            project: 0
        }
    }

    changeProject= project => {
        window.scrollTo(0,0)
        const $project = document.querySelector('.project')
        $project.classList.toggle('disappear')

        setTimeout(() => {
            this.setState({
                project: project
            })
            $project.classList.toggle('disappear')
        }, 600);
    }

    handleClick = () => {
        if(this.state.project < 1)
        {
            const project = this.state.project + 1
            
            this.changeProject(project)
        }
        else {
            const project = 0
            
            this.changeProject(project)
        }
    }

    render() {
        return(
            <StaticQuery
                query={graphql`
                query ProjectImage{
                    allProjectsJson {
                        edges {
                            node {
                                title
                                theme
                                year
                                role
                                context
                            }
                        }
                    }
                    placeholderImage: file(relativePath: { eq: "projet1.jpg" }) {
                        childImageSharp {
                            fluid(quality: 90, maxWidth: 1080) {
                            ...GatsbyImageSharpFluid
                            }
                        }
                    }
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
                render={data => 
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
                            <containers.project className="project">
                                <div className='img'><Img fluid={data.placeholderImage.childImageSharp.fluid} /></div>
                                <containers.row>
                                    <containers.col>
                                        <texts.projectTitle>{data.allProjectsJson.edges[this.state.project].node.title} • {data.allProjectsJson.edges[this.state.project].node.year}</texts.projectTitle>
                                        <texts.theme>{data.allProjectsJson.edges[this.state.project].node.theme}</texts.theme>
                                    </containers.col>
                                    <texts.number>0{this.state.project+1}/0{data.allProjectsJson.edges.length}</texts.number>
                                </containers.row>
                                <div className='img-after' onClick={this.handleClick}><Img fluid={data.placeholderImage.childImageSharp.fluid} /></div>
                            </containers.project>
                            <texts.more>Show me more</texts.more>
                            </containers.work>
                        </BackgroundImage>
                        <containers.content>
                            <texts.contentTitle>{data.allProjectsJson.edges[this.state.project].node.title}</texts.contentTitle>
                            <containers.col className="col">
                            <containers.row className="row">
                                <texts.info>Year</texts.info>
                                <texts.text className="paragraphe">{data.allProjectsJson.edges[this.state.project].node.year}</texts.text>
                            </containers.row>
                            <containers.row className="row">
                                <texts.info>Role</texts.info>
                                <texts.text className="paragraphe">{data.allProjectsJson.edges[this.state.project].node.role}</texts.text>
                            </containers.row>
                            <containers.row className="row">
                                <texts.info>Context</texts.info>
                                <texts.text className="paragraphe">{data.allProjectsJson.edges[this.state.project].node.context}</texts.text>
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
                            <texts.buttonProject onClick={this.handleClick} rel="noopener noreferrer">Next project</texts.buttonProject>
                            </containers.col>
                        </containers.content>
                    </>
                }
            />
        )
    }
}

export default Project