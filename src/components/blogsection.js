import React, { Component } from "react"
import ArticlePreview from "./articlepreview"
/* eslint-disable */
class BlogSection extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ul>
          {this.props.posts.map((post, i) => {
            if (post.node.category === this.props.category) {
              return <ArticlePreview post={post} key={i} />
            }
          })}
        </ul>
      </div>
    )
  }
}

export default BlogSection
