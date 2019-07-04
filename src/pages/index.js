import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from '../components/HeroBanner'
import KillerPoints from '../components/KillerPoints'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroBanner />
    <KillerPoints />
  </Layout>
)

export default IndexPage
