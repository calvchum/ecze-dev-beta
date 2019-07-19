import React from "react"
import Layout from "./layout"
import { Link, ModalRoutingContext } from "gatsby-plugin-modal-routing"

const ConditionalLayout = ({ children, ...props }) => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) =>
      modal ? (
        <React.Fragment>
          <Link to={closeTo}>Close</Link>
          {children}
        </React.Fragment>
      ) : (
        <Layout {...props}>{children}</Layout>
      )
    }
  </ModalRoutingContext.Consumer>
)

export default ConditionalLayout
