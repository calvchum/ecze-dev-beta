import React, { Component } from "react"
import Layout from "../components/layout"
import FilterBlog from "../components/filterblog"
import { ResponsiveFilter } from "../components/ResponsiveFilter"
import BlogSection from "../components/blogsection"
import { graphql } from "gatsby"
import {
  HeaderText,
  SubheaderText,
  colors,
  lineWidths,
  BackgroundColor,
} from "../utilities"
import { Underline } from "../components/Underline"
import {
  BlogFilterWrapper,
  BlogHeaderWrapper,
  BlogHeader,
  PaddingBottom,
  ResponsiveFilterWrapper,
  DisplayNone,
} from "../components/BlogPage"

export default class blog extends Component {
  constructor() {
    super()
    this.state = {
      selectedCategories: [],
    }
    this.updateSelectedCategories = this.updateSelectedCategories.bind(this)
    this.handleSeeMore = this.handleSeeMore.bind(this)
    this.populateState = this.populateState.bind(this)
  }

  componentDidMount() {
    this.populateState()
  }

  populateState() {
    const posts = this.props.data.allContentfulBlogPost.edges
    let categories = []
    categories.push("Latest posts")
    posts.forEach(post => {
      categories.push(post.node.category)
    })
    const uniqueCategories = new Set(categories)
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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedCategories.length === 0) {
      this.populateState()
    }
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
  }

  render() {
    const posts = this.props.data.allContentfulBlogPost.edges
    let categories = []
    categories.push("Latest posts")
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

      let renderPosts = []
      posts.map((post, i) => {
        if (post.node.category === category || category === "Latest posts") {
          renderPosts.push(post.node)
        }
      })
      return (
        <BlogSection
          posts={renderPosts}
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
      <BackgroundColor color={colors.almostWhite}>
        <Layout props={this.props}>
          <div style={{ padding: "0em 1em" }}>
            <BlogHeaderWrapper>
              <BlogHeader>
                <PaddingBottom>
                  <HeaderText>
                    <Underline
                      size={lineWidths.ctaUnderline}
                      color={colors.primary}
                    >
                      The Ecze Hub
                    </Underline>
                  </HeaderText>
                </PaddingBottom>
                <SubheaderText style={{ fontWeight: "400" }}>
                  Get connected to the Ecze Hub to discover a happier,
                  healthier, itch-free life.
                </SubheaderText>
              </BlogHeader>
            </BlogHeaderWrapper>
            {/* FILTER RESPONSIVE FUNCTIONALITY */}
            <ResponsiveFilterWrapper>
              <ResponsiveFilter
                cta="filter"
                categories={categories}
                updateSelectedCategories={this.updateSelectedCategories}
              />
            </ResponsiveFilterWrapper>
            {/* FILTER DESKTOP FUNCTIONALITY */}
            <BlogFilterWrapper>
              <DisplayNone>
                <FilterBlog
                  categories={categories}
                  updateSelectedCategories={this.updateSelectedCategories}
                />
              </DisplayNone>
              <div>{displayedSections}</div>
            </BlogFilterWrapper>
          </div>
        </Layout>
      </BackgroundColor>
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
