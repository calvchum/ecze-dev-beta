import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Faq = () => (
  <Layout>
    <SEO title="FAQ" />
    <h1>FAQs</h1>
    <p>Products. Allergies. Shipping. Info.</p>
  </Layout>
)

export default Faq

export const query = graphql`
  {
    allContentfulFaQs {
      edges {
        node {
          question
          answer {
            answer
          }
        }
      }
    }
  }
`
