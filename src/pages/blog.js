import React, { Component } from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

export default class blog extends Component {
  render() {
    const posts = this.props.data.allContentfulBlogPost.edges
    return (
      <Layout>
        <h1>BLOG</h1>
        <ul>
          {posts.map(post => (
            <Link to={`blog/${post.node.slug}`}>
              <li key={post.node.slug}>{post.node.title}</li>
            </Link>
          ))}
        </ul>
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogPageQuery {
    allContentfulBlogPost {
      edges {
        node {
          slug
          tags
          title
        }
      }
    }
  }
`
