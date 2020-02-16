import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { animated } from "react-spring"
import Navigation from "./Navigation"
import { colors } from "../utilities"
import SocialMediaIcons from "./SocialMedia"
import eczeTransparentLogo from "../assets/logo/newLogoWhite740x300.svg"

const ResponsiveNavStyles = styled(animated.div)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background: ${colors.almostWhite};
  font-size: 2em;
  padding: 15vh 0em 0em 0em;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > li {
    padding: 0.5em 0em;
  }
`
const EczeLogo = styled(Link)`
  position: absolute;
  left: 1em;
  top: 0.5em;
  height: 80px;

  & img {
    margin-bottom: 0em;
  }
`

const LogoWrapper = styled.img`
  height: 80px;
  margin-bottom: 0em;
  display: flex;
`

const ResponsiveNav = ({ style, path }) => {
  return (
    <ResponsiveNavStyles style={style}>
      <EczeLogo to="/">
        <LogoWrapper src={eczeTransparentLogo} alt="" />
      </EczeLogo>
      <Navigation path={path} />
      <SocialMediaIcons />
    </ResponsiveNavStyles>
  )
}

export default ResponsiveNav
