import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import * as data from "../constants/pageInfo"

const Footer = ({ siteTitle }) => (
  <footer
    style={{
      background: `#238DDE`,
      marginBottom: `1.45rem`,
    }}
  >
    <div>
      <ul>
        {data.pageData.map((page, i) => {
          return (
            <Link key={i} to={page.link}>
              <li
                style={{
                  display: "inline-block",
                  marginLeft: "5px",
                  color: "white",
                }}
              >
                {page.title} /
              </li>
            </Link>
          )
        })}
      </ul>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
