import React from "react"
import { Link } from "gatsby"

import SEO from "../components/seo"
import { texts } from '../styles/index'

const Home = () => (
  <>
    <SEO title="Home" description="This is my description." />
    <texts.textBig>Hey! I’m Sacha, a digital designer from Paris, focused on UI/UX Design, Illustration & Motion Design. Currently student at HETIC. </texts.textBig>
    <texts.button to="/work">See my work</texts.button>
  </>
)

export default Home
