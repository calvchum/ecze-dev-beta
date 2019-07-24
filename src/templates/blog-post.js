import React, { Component } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import Layout from "../components/layout"
import BlogSection from "../components/blogsection"
import SEO from "../components/seo"
import {
  BodyText,
  HeaderText,
  colors,
  BackgroundColor,
  media,
} from "../utilities"

const IndividualBlogWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;

  ${media.med`
    padding: 0em 1em;
  `}
`
const BlogHeaderWrapper = styled.div`
  border-bottom: 1px solid ${colors.almostBlack};
  padding-bottom: 0.4em;
`

const BlogContentWrapper = styled.div`
  padding: 1em 0em 3em 0em;
  margin: 0 auto;
  max-width: 600px;
  text-align: justify;
`

const HeroImage = styled.img`
  width: 100vw;
  height: 100vh;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`

const OverFlowHidden = styled.div`
  max-width: 100vw;
  height: 40vh;
  overflow: hidden;
`

export default class BlogPostTemplate extends Component {
  render() {
    const post = this.props.data.contentfulBlogPost
    const category = this.props.data.contentfulBlogPost.category
    // need to pass down "posts" as an array of objects to BlogSection, not an array of node objects
    const posts = this.props.data.allContentfulBlogPost.edges

    let renderPosts = []
    posts.map((post, i) => {
      renderPosts.push(post.node)
    })
    return (
      <BackgroundColor color={colors.almostWhite}>
        <Layout>
          <SEO title={`${post.title}`} />
          <OverFlowHidden>
            <Img fluid={post.heroImage.fluid} />
          </OverFlowHidden>
          <IndividualBlogWrapper>
            <BlogHeaderWrapper>
              <HeaderText>{post.title}</HeaderText>
              <BodyText>{post.publishDate}</BodyText>
            </BlogHeaderWrapper>
            <BlogContentWrapper
              dangerouslySetInnerHTML={{
                __html: post.body.childMarkdownRemark.html,
              }}
            />
            <BlogSection
              posts={renderPosts}
              category={category}
              title="Similar posts"
            />
          </IndividualBlogWrapper>
        </Layout>
      </BackgroundColor>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $category: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(
      filter: { category: { eq: $category }, slug: { ne: $slug } }
      limit: 3
      sort: { fields: createdAt, order: DESC }
    ) {
      edges {
        node {
          title
          category
          slug
          createdAt(formatString: "MMM DD YYYY")
          heroImage {
            file {
              url
            }
          }
        }
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      category
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyImageSharpFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
