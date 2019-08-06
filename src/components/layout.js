import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./Header"
import Footer from "./Footer"
import SignUpForm from "./SignUpForm"
import "./layout.css"

const Layout = ({ children, props }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} path={props.path} />
        <div>
          <main>{children}</main>
        </div>
        {props.path != "/thankyou/" ? <SignUpForm /> : null}
        <Footer path={props.path} />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
