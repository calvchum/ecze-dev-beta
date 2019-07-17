import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import FaqListItem from "../components/faqListItem"
import SEO from "../components/seo"
import {
  HeaderText,
  SubheaderText,
  BodyText,
  colors,
  lineWidths,
  BackgroundColor,
} from "../utilities"
import { Underline } from "../components/Underline"
import {
  FaqHeaderWrapper,
  FaqWrapper,
  QuestionWrapper,
} from "../components/FaqPage"

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
      <BackgroundColor color={colors.almostWhite}>
        <Layout>
          <SEO title="FAQ" />
          <FaqWrapper>
            <FaqHeaderWrapper>
              <HeaderText>
                <Underline
                  size={lineWidths.ctaUnderline}
                  color={colors.primary}
                >
                  FAQs
                </Underline>
              </HeaderText>
              <div>
                <SubheaderText>
                  Products. Allergies. Shipping. Info.
                </SubheaderText>
              </div>
            </FaqHeaderWrapper>

            <QuestionWrapper>
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
            </QuestionWrapper>
          </FaqWrapper>
        </Layout>
      </BackgroundColor>
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
