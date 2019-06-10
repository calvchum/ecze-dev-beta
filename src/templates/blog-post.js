import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default class BlogPostTemplate extends Component {
  render() {
    const post = this.props.data.contentfulBlogPost
    return (
      <Layout>
        <SEO title={`${post.title}`} />
        <h1>{post.title}</h1>
        <p>{post.publishDate}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
        />
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
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
