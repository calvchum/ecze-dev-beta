import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Navigation from "./Navigation"
import eczeLogoWhite from "../assets/logo/white.svg"
// import { typography, fontsize } from "../utilities"

const HeaderWrapper = styled.section`
  display: grid;
  grid: 120px / 1fr 1fr;
  align-items: center;
  padding: 0em 3em;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`

const LogoWrapper = styled.img`
  height: 100px;
  margin-bottom: 0em;
`

const HeaderNavWrapper = styled.ul`
  display: grid;
  grid: 120px / repeat(4, auto);
  grid-gap: 1em;
  margin: 0em;
  justify-content: flex-end;
  align-items: center;
`

const Header = () => (
  <HeaderWrapper>
    <Link to="/">
      <LogoWrapper src={eczeLogoWhite} alt="ECZE Logo" />
    </Link>
    <div>
      <HeaderNavWrapper>
        <Navigation />
      </HeaderNavWrapper>
    </div>
  </HeaderWrapper>
)

export default Header
