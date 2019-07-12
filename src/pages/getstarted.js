import React, { Component } from "react"
import { Link } from "gatsby"
import BlogSection from "../components/blogsection"
import Layout from "../components/layout"
import SEO from "../components/seo"
import * as data from "../constants/getStartedPosts"

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
    data.postData.map(object => {
      let objectPosts = []
      object.slugs.map(slug => {
        this.props.data.allContentfulBlogPost.edges.forEach(edge => {
          if (edge.node.slug === slug) {
            objectPosts.push(edge.node)
          }
        })
        object.posts = objectPosts
      })
      getStartedCategories.push(object)
    })
    this.setState({
      getStartedCategories,
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Get started" />
        <h3>If you have eczema, the first step is to LEARN about eczema</h3>
        <div>
          <p>
            Now I'm not sure if it’s just me, but I have an incredibly short
            attention span (I blame social media for this deficiency), and I
            personally find medical reports a total snooze fest. But if you want
            a quick education summary that doesn’t come from a smarty pants
            doctor, here is a list of short and helpful blog posts that tells
            you all you need to know about eczema
          </p>
        </div>
        <div>
          {this.state.getStartedCategories.map((object, i) => {
            return (
              <BlogSection
                posts={object.posts}
                title={object.category}
                key={i}
                index={i}
                postLimit={3}
              />
            )
          })}
        </div>
        <Link to="/">Go back to the homepage</Link>
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
            file {
              url
            }
          }
        }
      }
    }
  }
`
