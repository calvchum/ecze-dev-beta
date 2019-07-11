import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import FaqListItem from "../components/faqListItem"
import SEO from "../components/seo"

export default class Faq extends Component {
  render() {
    return (
      <Layout>
        <SEO title="FAQ" />
        <h1>FAQs</h1>
        <p>Products. Allergies. Shipping. Info.</p>
        {this.props.data.allContentfulFaQs.edges.map((edges, i) => {
          return console.log(edges.node.question, edges.node.answer.answer)
        })}
      </Layout>
    )
  }
}

export const query = graphql`
  query faqQuestionQuery {
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
