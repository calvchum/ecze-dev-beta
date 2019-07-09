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
    this.handleSeeMore = this.handleSeeMore.bind(this)
  }

  componentDidMount() {
    const posts = this.props.data.allContentfulBlogPost.edges
    let categories = []
    posts.forEach(post => {
      categories.push(post.node.category)
    })
    const uniqueCategories = new Set(categories)
    console.log(uniqueCategories)
    let selectedCategories = []
    uniqueCategories.forEach(category => {
      let categoryObject = { name: category, postLimit: 6 }
      selectedCategories.push(categoryObject)
    })
    this.setState({
      selectedCategories,
    })
  }

  handleSeeMore(e, i) {
    // this function is called by the See More button from the blogsection component
    // it incremenets the postLimit value by 6
    //take a copy of the state of the object we want to change
    let selectedCategoriesCopy = JSON.parse(
      JSON.stringify(this.state.selectedCategories)
    )
    // add to our state
    const updatedLimit = this.state.selectedCategories[i].postLimit + 3
    selectedCategoriesCopy[i].postLimit = updatedLimit
    // update our state
    this.setState({
      selectedCategories: selectedCategoriesCopy,
    })
  }

  updateSelectedCategories(selected) {
    let selectedCategories = []
    selected.forEach(category => {
      if (category.isChecked) {
        // create an object with key value pair of name: name, postLimit: 6
        let categoryObect = { name: category.value }
        selectedCategories.push(categoryObect)
      }
      this.setState({
        selectedCategories,
      })
    })
    console.log(this.state.selectedCategories.length)
  }

  render() {
    const posts = this.props.data.allContentfulBlogPost.edges
    let categories = []
    posts.forEach(post => {
      categories.push(post.node.category)
    })

    // extract all the category names from categoryObject
    let categoryArray = []
    this.state.selectedCategories.forEach(object => {
      categoryArray.push(object.name)
    })

    // only pass down the posts that belong to the category
    let displayedSections = categoryArray.map((category, i) => {
      const { postLimit } = this.state.selectedCategories[i]

      return (
        <BlogSection
          posts={posts}
          category={category}
          key={i}
          index={i}
          title={category}
          postLimit={postLimit}
          seeMore={true}
          handleSeeMore={this.handleSeeMore}
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
