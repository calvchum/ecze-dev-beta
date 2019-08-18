import React, { Component } from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import BlogSection from "../components/blogsection"
import SEO from "../components/seo"
import styled from "styled-components"
import * as data from "../constants/getStartedPosts"
import {
  HeaderText,
  SubheaderText,
  colors,
  media,
  lineWidths,
  BackgroundColor,
  BackgroundImage,
} from "../utilities"
import {
  GetStartedWrapper,
  HeaderSection,
  BodySection,
} from "../components/GetStarted"
import { Underline } from "../components/Underline"
import Learning from "../assets/icons/Learn.svg"
import Engaging from "../assets/icons/Engage.svg"
import Developing from "../assets/icons/Develop.svg"

// the text on this page should be managed by Contentful and not hard coded
export default class GetStarted extends Component {
  constructor() {
    super()
    this.state = {
      getStartedCategories: [],
    }
  }

  componentDidMount() {
    let getStartedCategories = []
    const IconArray = [
      { title: "Learning", icon: Learning },
      { title: "Developing", icon: Developing },
      { title: "Engaging", icon: Engaging },
    ]
    data.postData.map(object => {
      let objectPosts = []
      object.slugs.map(slug => {
        this.props.data.allContentfulBlogPost.edges.forEach(edge => {
          if (edge.node.slug === slug) {
            objectPosts.push(edge.node)
          }
        })
        object.posts = objectPosts
        console.log(object)
      })
      IconArray.map((iconObject, i) => {
        if (iconObject.title === object.category) {
          object.icon = iconObject.icon
        }
      })
      getStartedCategories.push(object)
    })
    this.setState({
      getStartedCategories,
    })
  }

  render() {
    return (
      <Layout props={this.props}>
        <SEO title="Get started" />
        <GetStartedWrapper>
          <BackgroundImage>
            <HeaderSection>
              <HeaderText>
                <Underline
                  size={lineWidths.ctaUnderline}
                  color={colors.secondary}
                >
                  Getting Started
                </Underline>
              </HeaderText>
              <SubheaderText style={{ fontWeight: "400" }}>
                Welcome to the start of your journey! If you're here, you or
                someone you love is probably suffering from eczema and you're
                here to find out more about it. <br></br>
                <br></br>We hope to make this as easy as possible for you with
                our three-step process to kick start your eczema healig journey:
              </SubheaderText>
            </HeaderSection>
          </BackgroundImage>
          <BackgroundColor color={colors.almostWhite}>
            <BodySection>
              {this.state.getStartedCategories.map((object, i) => {
                return (
                  <BlogSection
                    posts={object.posts}
                    subtitle={object.subtitle}
                    title={object.category}
                    key={i}
                    index={i}
                    postLimit={3}
                    icon={object.icon}
                  />
                )
              })}
            </BodySection>
          </BackgroundColor>
        </GetStartedWrapper>
      </Layout>
    )
  }
}

// prettier-ignore
export const query = graphql`
  {
    allContentfulBlogPost{
      edges {
        node {
          title
          category
          slug
          heroImage {
            fluid(maxWidth: 1000, background: "rgb:000000") {
              ...GatsbyContentfulFluid
            }
            file {
              url
            }
          }
        }
      }
    }
  }
`
