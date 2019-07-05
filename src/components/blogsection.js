import React, { Component } from "react"
import ArticlePreview from "./articlepreview"
/* eslint-disable */
class BlogSection extends Component {
  render() {
    // the reason to push it to a new array is to limit the number of times it renders
    let renderPosts = []
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul>
          {this.props.posts.map((post, i) => {
            if (post.node.category === this.props.category) {
              renderPosts.push(post)
              return <ArticlePreview post={renderPosts} key={i} />
            }
          })}
        </ul>
      </div>
    )
  }
}

export default BlogSection
