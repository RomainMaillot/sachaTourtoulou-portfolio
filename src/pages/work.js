import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts"
import SEO from "../components/seo"
import { texts, containers } from '../styles/index'

const Work = () => (
  <>
    <SEO title="Projects" />
    <texts.title>My work</texts.title>
    <p>Here you can see all my projects</p>
    <Link to="/">Go back to the homepage</Link>
  </>
)

export default Work
