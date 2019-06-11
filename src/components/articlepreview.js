import React, { Component } from "react"
import { Link } from "gatsby"

class ArticlePreview extends Component {
  render() {
    const { title, slug } = this.props.post.node
    return (
      <div>
        <Link to={`/blog/${slug}`}>
          <li>{title}</li>
        </Link>
      </div>
    )
  }
}

export default ArticlePreview
