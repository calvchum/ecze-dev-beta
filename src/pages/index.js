import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Landing page</h1>
    <p>Ever thought about a holistic approach to eczema?</p>
    <Link to="getstarted">
      <button>Get started</button>
    </Link>
  </Layout>
)

export default IndexPage
