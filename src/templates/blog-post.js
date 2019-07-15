import React, { Component } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import BlogSection from "../components/blogsection"
import SEO from "../components/seo"
import { 
BodyText, 
HeaderText,
colors,
BackgroundColor
} from '../utilities'

const IndividualBlogWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;
const BlogHeaderWrapper = styled.div`
  border-bottom: 1px solid ${colors.almostBlack};
  padding-bottom: 0.4em;
`;

const BlogContentWrapper = styled.div`
  padding: 1em 0em 3em 0em;
  margin: 0 auto;
  max-width: 600px;
  text-align: justify;

`;


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
