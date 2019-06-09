import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

// the text on this page should be managed by Contentful and not hard coded

const GetStarted = () => (
  <Layout>
    <SEO title="Get started" />
    <h3>If you have eczema, the first step is to LEARN about eczema</h3>
    <p>
      Now I'm not sure if it’s just me, but I have an incredibly short attention
      span (I blame social media for this deficiency), and I personally find
      medical reports a total snooze fest. But if you want a quick education
      summary that doesn’t come from a smarty pants doctor, here is a list of
      short and helpful blog posts that tells you all you need to know about
      eczema
    </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default GetStarted
