import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { Link } from "gatsby"
import styled from "styled-components"
import Navigation from "./Navigation"
import ResponsiveNav from "./ResponsiveNav"
import { paddingDefaults, colors } from "../utilities"
import eczeLogoWhite from "../assets/logo/white.svg"
import { media } from "../utilities"

const HeaderWrapper = styled.div`
  display: grid;
  grid: 120px / 1fr 1fr;
  align-items: center;
  padding: 0em ${paddingDefaults.pageBorder};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background: white;
  // z-index: 2;
  margin-bottom: 2px;

  ${media.med`
    padding: 0.4em 1.5em;
    display: flex;
    justify-content: space-between;
  `}
`

const LogoWrapper = styled.img`
  height: 100px;
  margin-bottom: 0em;
  display: flex;
`

const BurgerWrapper = styled.div`
  display: none;
  ${media.med`
    display: block;
    z-index: 11;
    cursor: pointer;
  `}
`
const Span = styled(animated.div)`
  display: flex;
  flex-direction: column;
  width: 40px;
  padding-bottom: 8px;
  border-bottom: 2px ${colors.almostBlack} solid;
`

const HeaderNavWrapper = styled.ul`
  display: grid;
  grid: 120px / repeat(4, auto);
  grid-gap: 1em;
  margin: 0em;
  justify-content: flex-end;
  align-items: center;

  ${media.med`
    display: none;
  `}
`

const Header = ({ path }) => {
  const [isNavOpen, setNavOpen] = useState(false)
  const navAnimation = useSpring({
    transform: isNavOpen ? `translate3d(0,0,0)` : `translate3d(-100%,0,0)`,
  })
  const middleLine = useSpring({
    transform: isNavOpen ? `rotate(45deg)` : `rotate(0deg)`,
    paddingBottom: isNavOpen ? `0px` : `8px`,
  })
  const bottomLine = useSpring({
    transform: isNavOpen ? `rotate(-45deg)` : `rotate(0deg)`,
    paddingBottom: isNavOpen ? `0px` : `8px`,
  })

  const firstLine = useSpring({
    borderBottom: isNavOpen
      ? `0px white solid`
      : `2px ${colors.almostBlack} solid`,
    paddingBottom: isNavOpen ? `0px` : `8px`,
  })

  return (
    <HeaderWrapper>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <LogoWrapper src={eczeLogoWhite} alt="ECZE Logo" />
      </Link>
      {/* RESPONSIVE MENU ICON & SLIDEOUT MENU */}
      <ResponsiveNav style={navAnimation} path={path} />
      <div style={{ zIndex: 15 }}>
        <BurgerWrapper onClick={() => setNavOpen(!isNavOpen)}>
          <Span style={firstLine}></Span>
          <Span style={middleLine}></Span>
          <Span style={bottomLine}></Span>
        </BurgerWrapper>

        <HeaderNavWrapper>
          <Navigation path={path} />
        </HeaderNavWrapper>
      </div>
    </HeaderWrapper>
  )
}

export default Header
