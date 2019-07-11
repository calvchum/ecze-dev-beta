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
    let faqItem = JSON.parse(JSON.stringify(this.state.faqItem))
    faqItem.map(faq => {
      return (faq.isClicked = false)
    })
    faqItem[i].isClicked = !faqItem[i].isClicked
    this.setState({
      faqItem,
    })
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
