import React, { Component } from "react"
import { Link } from "gatsby"
import BlogSection from "../components/blogsection"
import Layout from "../components/layout"
import SEO from "../components/seo"

// the text on this page should be managed by Contentful and not hard coded

export default class GetStarted extends Component {
  constructor() {
    super()
    this.state = {
      getStartedCategories: [],
    }
  }

  componentDidMount() {
    // Fill the state with pre-selected categories
    const categoryArray = ["Learning", "Developing", "Engaging"]

    const getStartedCategories = []
    categoryArray.map(category => {
      let categoryObject = {}
      categoryObject.categoryName = category
      return getStartedCategories.push(categoryObject)
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
        <div></div>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    allContentfulBlogPost(
      filter: {
        slug: {
          in: [
            "this-is-a-test"
            "the-skin-is-the-largest-organ-in-the-body"
            "loremipsem"
            "using-the-right-type-of-gloves-to-prevent-rashes"
            "healing-diet-sample-blog"
            "sample-blog-post"
          ]
        }
      }
    ) {
      edges {
        node {
          title
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
