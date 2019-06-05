import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts"
import SEO from "../components/seo"

const Contact = () => (
    <>
        <SEO title="Contact" />
        <h1>Contact me</h1>
        <p>Here you can contact me</p>
        <Link to="/">Go back to the homepage</Link>
    </>
)

export default Contact
