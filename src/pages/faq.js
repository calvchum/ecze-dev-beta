import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Layout from "../components/layout"
import FaqListItem from "../components/faqListItem"
import SEO from "../components/seo"

const Faq = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
      <>
        <Layout>
          <SEO title="FAQ" />
          <h1>FAQs</h1>
          <p>Products. Allergies. Shipping. Info.</p>
          {data.allContentfulFaQs.edges.map((edges, i) => {
            return (
              <FaqListItem
                key={i}
                question={edges.node.question}
                answer={edges.node.answer.answer}
              />
            )
          })}
        </Layout>
      </>
    )}
  />
)

export default Faq
