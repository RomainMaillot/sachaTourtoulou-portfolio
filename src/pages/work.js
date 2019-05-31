import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyles from '../styles/global'

const Work = () => (
  <Layout>
    <SEO title="Porjects" />
    <GlobalStyles />
    <h1>All my work</h1>
    <p>Here you can see all my projects</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Work
