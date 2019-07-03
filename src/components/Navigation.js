import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import * as data from "../constants/pageInfo"
import { colors } from "../utilities"
// import Header from "./Header"

// import { typography, fontsize } from "../utilities"

export const NavWrapper = styled.ul`
  display: flex;
  grid: 120px / repeat(4, auto);
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  margin-bottom: 0em;
  margin-left: 0em;
`;

export const ListItem = styled.li`
  margin: 0em 0.5em;
  & a {
    color: ${colors.almostBlack}
    text-decoration: none;
  }
`;



const Navigation = ({ props }) => (
  <NavWrapper>
    {data.pageData.map((page, i) => {
      return (
        <ListItem key={i}>
          <Link to={page.link}> 
            {page.title}
          </Link>
        </ListItem> 
      )
    })}
  </NavWrapper>
)

export default Navigation
