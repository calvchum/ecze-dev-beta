import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import * as data from "../constants/pageInfo"
import { colors, NavLinksFont, lineWidths } from "../utilities"
import { Underline } from "./Underline"

const ListItem = styled.li`
  ${NavLinksFont}
  list-style: none;
  margin-bottom: 0.3em;
  margin-left: 0em;
  display: block;
  // z-index: 3;
  & a {
    color: ${colors.almostBlack};
    text-decoration: none;
    transition: 0.2s;
  }
  & a:hover {
    color: ${colors.primary};
    text-decoration: none;
  }
`

const Navigation = ({ props, path }) => (
  <>
    {data.pageData.map((page, i) => {
      // pass the pathname to navigation
      // navigation locations: header, burger, footer
      // get rid of this conditional
      // add a new conditional that if page.link matches pathname, then render underline
      if (page.link === `/${path.split("/")[1]}/`) {
        return (
          <ListItem key={i}>
            <Link to={page.link}>
              <Underline size={lineWidths.signUp} color={colors.primary}>
                {page.title}
              </Underline>
            </Link>
          </ListItem>
        )
      } else {
        return (
          <ListItem key={i}>
            <Link to={page.link}>{page.title}</Link>
          </ListItem>
        )
      }
    })}
  </>
)

export default Navigation
