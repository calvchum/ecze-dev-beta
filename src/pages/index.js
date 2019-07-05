import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroBanner from '../components/HeroBanner'
import KillerPoints from '../components/KillerPoints'
import HeaderSubheader from '../components/HeaderSubheader'
import ReadBlog from '../components/ReadBlog'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HeroBanner />
    <KillerPoints />
    <HeaderSubheader />
    <ReadBlog />
  </Layout>
)

export default IndexPage
