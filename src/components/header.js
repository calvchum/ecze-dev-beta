import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import * as data from "../constants/pageInfo"
import { colors } from "../utilities"

// import { typography, fontsize } from "../utilities"

const HeaderWrapper = styled.section`
  display: grid;
  grid: 120px / 1fr 1fr;
  align-items: center;
  padding: 0rem 3em;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`;

const LogoWrapper = styled.img`
  height: 100px;
  margin-bottom: 0rem;
`;

const NavWrapper = styled.ul`
  display: grid;
  grid: 120px / repeat(4, auto);
  justify-content: flex-end;
  align-items: center;
  list-style: none;

  margin-bottom: 0em;
  margin-left: 0em;
`;
const ListItem = styled.li`
  margin: 0em 0.5em;
  & a {
    color: ${colors.almostBlack}
    text-decoration: none;
  }
`;


const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <LogoWrapper src={require('../assets/logo/white.svg')} alt="ECZE Logo" />   
    <NavWrapper>
      {data.pageData.map((page, i) => {
        return (
          <ListItem>
            <Link key={i} to={page.link}> 
              {page.title}
            </Link>
          </ListItem> 
        )
      })}
    </NavWrapper>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
