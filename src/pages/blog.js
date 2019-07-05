import React, { Component } from "react"
import Layout from "../components/layout"
import FilterBlog from "../components/filterblog"
import BlogSection from "../components/blogsection"
import { graphql } from "gatsby"

export default class blog extends Component {
  constructor() {
    super()
    this.state = {
      selectedCategories: [],
    }
    this.updateSelectedCategories = this.updateSelectedCategories.bind(this)
  }

  updateSelectedCategories(selected) {
    let selectedCategories = []
    selected.forEach(category => {
      if (category.isChecked) {
        selectedCategories.push(category.value)
      }
      this.setState({
        selectedCategories,
      })
    })
  }

  render() {
    const posts = this.props.data.allContentfulBlogPost.edges
    let categories = []
    posts.forEach(post => {
      categories.push(post.node.category)
    })

    // only pass down the posts that belong to the category
    let displayedSections = this.state.selectedCategories.map((category, i) => {
      return (
        <BlogSection
          posts={posts}
          category={category}
          key={i}
          title={category}
          postlimit={6}
        />
      )
    })

    return (
      <Layout>
        <h1>BLOG</h1>
        <FilterBlog
          categories={categories}
          updateSelectedCategories={this.updateSelectedCategories}
        />
        {displayedSections}
      </Layout>
    )
  }
}

export const query = graphql`
  query BlogPageQuery {
    allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
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
