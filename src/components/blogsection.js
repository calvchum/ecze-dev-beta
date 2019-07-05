import React, { Component } from "react"
import ArticlePreview from "./articlepreview"
/* eslint-disable */
class BlogSection extends Component {
  render() {
    // postLimit is the max amount of post displayed per section. it is a prop passed from the parent component, default if null is no limit
    const postLimit = 5
    // the reason to push it to a new array is to limit the number of times it renders by applying slice to it.
    let renderPosts = []
    this.props.posts.map((post, i) => {
      if (post.node.category === this.props.category) {
        renderPosts.push(post)
      }
    })

    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul>
          {renderPosts.slice(0, postLimit).map((post, i) => {
            return <ArticlePreview post={post} key={i} />
          })}
        </ul>
      </div>
    )
  }
}

export default BlogSection
