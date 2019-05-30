import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import GlobalStyles from '../styles/global'
import { texts } from '../styles/index'

const Home = () => (
  <Layout>
    <SEO title="Home" description="This is my description." />
    <GlobalStyles />
    <texts.textBig>Hey! I’m Sacha, a digital designer from Paris, focused on UI/UX Design, Illustration & Motion Design. Currently student at HETIC. </texts.textBig>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default Home
