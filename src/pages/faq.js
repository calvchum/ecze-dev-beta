import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import FaqListItem from "../components/faqListItem"
import SEO from "../components/seo"
import {
  HeaderText,
  SubheaderText,
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
    // toggled clicked FAQ state
    faqItem[i].isClicked = !faqItem[i].isClicked
    // creates a new array without the clicked FAQ
    const otherQuestions = faqItem.filter(object => object !== faqItem[i])
    // sets all other FAQ questions to unclicked
    otherQuestions.map(question => {
      return (question.isClicked = false)
    })
    this.setState({
      faqItem,
    })
  }

  render() {
    return (
      <BackgroundColor color={colors.almostWhite}>
        <Layout props={this.props}>
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
                  Got a question? Let's get them answered.
                </SubheaderText>
              </div>
            </FaqHeaderWrapper>

            <QuestionWrapper>
              {this.state.faqItem.map((faq, i) => {
                return (
                  <FaqListItem
                    key={i}
                    index={i}
                    question={faq.question}
                    answer={faq.answer}
                    isClicked={faq.isClicked}
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
