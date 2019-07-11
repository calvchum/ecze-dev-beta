import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import FaqListItem from "../components/faqListItem"
import SEO from "../components/seo"

export default class Faq extends Component {
  constructor() {
    super()
    this.state = {
      faqItem: [],
    }
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    const edges = this.props.data.allContentfulFaQs.edges
    const faqItem = []
    edges.map(edge => {
      let faqObject = {}
      faqObject.question = edge.node.question
      faqObject.answer = edge.node.answer.answer
      faqObject.isClicked = false
      return faqItem.push(faqObject)
    })
    this.setState({
      faqItem,
    })
  }

  handleClick(i) {
    const faqItem = { ...this.state.faqItem }
    console.log(faqItem[i])
    console.log(faqItem[i].isClicked)
    faqItem[i].isClicked = !faqItem[i].isClicked
  }

  render() {
    return (
      <Layout>
        <SEO title="FAQ" />
        <h1>FAQs</h1>
        <p>Products. Allergies. Shipping. Info.</p>
        {this.state.faqItem.map((faq, i) => {
          if (faq.isClicked) {
            return (
              <FaqListItem
                key={i}
                index={i}
                question={faq.question}
                answer={faq.answer}
                handleClick={this.handleClick}
              />
            )
          }
          return (
            <FaqListItem
              key={i}
              index={i}
              question={faq.question}
              handleClick={this.handleClick}
            />
          )
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
