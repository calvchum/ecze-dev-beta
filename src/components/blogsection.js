import React, { Component } from "react"
import { Link } from "gatsby"

class BlogSection extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.category}</h3>
        <ul>
          {this.props.posts.map((post, i) => {
            if (post.node.category === this.props.category) {
              return (
                <Link to={`/blog${post.node.slug}`}>
                  <li>{post.node.title}</li>
                </Link>
              )
            }
          })}
        </ul>
      </div>
    )
  }
}

export default BlogSection
