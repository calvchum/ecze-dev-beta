import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from '../components/HeroBanner'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroBanner />
  </Layout>
)

export default IndexPage
