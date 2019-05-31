import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import GlobalStyles from '../styles/global'
import { texts } from '../styles/index'

const Home = () => (
  <Layout>
    <SEO title="Home" description="This is my description." />
    <GlobalStyles />
    <texts.textBig>Hey! I’m Sacha, a digital designer from Paris, focused on UI/UX Design, Illustration & Motion Design. Currently student at HETIC. </texts.textBig>
    <texts.button to="/work">see my work</texts.button>
  </Layout>
)

export default Home
