import React, { Component } from "react"
import { Link } from "gatsby"
import ArticlePreview from "./articlepreview"

class BlogSection extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.category}</h3>
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
