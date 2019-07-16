import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import * as data from "../constants/pageInfo"
import { colors, NavLinksFont } from "../utilities"

const ListItem = styled.li`
  ${NavLinksFont}
  list-style: none;
  margin-bottom: 0em;
  margin-left: 0em;
  & a {
    color: ${colors.almostBlack}
    text-decoration: none;
    transition: 0.2s;
  }
  & a:hover {
    color: ${colors.primary}
    text-decoration: underline;
  }
`;

const Navigation = ({ props }) => (
  <>
    {data.pageData.map((page, i) => {
      return (
        <ListItem key={i}>
          <Link to={page.link}> 
            {page.title}
          </Link>
        </ListItem> 
      )
    })}
  </>
)

export default Navigation
