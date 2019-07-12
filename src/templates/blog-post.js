import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import BlogSection from "../components/blogsection"
import SEO from "../components/seo"

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
    console.log(renderPosts)
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
        <BlogSection
          posts={renderPosts}
          category={category}
          title="Similar posts"
        />
      </Layout>
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
