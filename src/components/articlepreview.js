import React from "react"
import { Link } from "gatsby"

const ArticlePreview = ({
  post: {
    node: {
      slug,
      category,
      title,
      heroImage: {
        file: { url },
      },
    },
  },
}) => (
  <Link to={`/blog/${slug}`} style={{ textDecoration: "none" }}>
    <div
      style={{
        width: "33%",
        border: "1px solid",
        borderRadius: "4px",
        marginBottom: "10px",
      }}
    >
      <img src={url} alt="title" style={{ width: "100%" }} />
      <li style={{ listStyleType: "none" }}>{category}</li>
      <li style={{ listStyleType: "none" }}>{title}</li>
    </div>
  </Link>
)
export default ArticlePreview
