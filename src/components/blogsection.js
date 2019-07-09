import React, { Component } from "react"
import ArticlePreview from "./articlepreview"
import styled from "styled-components"

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 8px;
  max-width: 934px;
`

/* eslint-disable */
class BlogSection extends Component {
  render() {
    // postLimit is the max amount of post displayed per section. it is a prop passed from the parent component, default if null is practically   no limit
    const postLimit = this.props.postLimit || 999
    // the reason to push it to a new array is to limit the number of times it renders by applying slice to it.
    let renderPosts = []
    this.props.posts.map((post, i) => {
      if (post.node.category === this.props.category) {
        renderPosts.push(post)
      }
    })

    // the 'See More...' button only renders if the seeMore prop is explicitly specified as true
    const seeMoreButton = (
      <button
        onClick={() =>
          this.props.handleSeeMore(this.props.category, this.props.index)
        }
      >
        See more...
      </button>
    )

    return (
      <div>
        <h3>{this.props.title}</h3>
        <ArticleGrid>
          {renderPosts.slice(0, postLimit).map((post, i) => {
            return <ArticlePreview post={post} key={i} />
          })}
        </ArticleGrid>
        {this.props.seeMore ? seeMoreButton : null}
      </div>
    )
  }
}

export default BlogSection
