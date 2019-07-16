import React, { useState } from "react"
import { useSpring, animated } from 'react-spring'; 
import { Link } from "gatsby"
import styled from "styled-components"
import Navigation from "./Navigation"
import ResponsiveNav from "./ResponsiveNav"
import { paddingDefaults, colors } from "../utilities"
import eczeLogoWhite from "../assets/logo/white.svg"
import { media } from '../utilities'

const HeaderWrapper = styled.div`
  display: grid;
  grid: 120px / 1fr 1fr;
  align-items: center;
  padding: 0em ${paddingDefaults.pageBorder};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  background: white;
  z-index: 1;


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
  `}
`
const Span = styled(animated.div)`
  display: flex;
  flex-direction: column;
  width: 40px;
  padding-bottom: 8px;
  border-bottom: 2px ${colors.almostBlack} solid;
  transform: rotate(180deg);
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


const Header = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const navAnimation = useSpring({
    transform: isNavOpen
      ? `translate3d(0,0,0)`
      : `translate3d(-100%,0,0)`
  });
  const middleLine = useSpring({
    width: isNavOpen ? `32px` : `40px`,
  });
  const bottomLine = useSpring({
    width: isNavOpen ? `16px` : `40px`,
  });

  return (
    <HeaderWrapper>
      <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
        <LogoWrapper src={eczeLogoWhite} alt="ECZE Logo" />
      </Link>
          <ResponsiveNav style={navAnimation} />
        <div style={{zIndex: 15}}>
          <BurgerWrapper onClick={() => setNavOpen(!isNavOpen)}>
            <Span></Span>
            <Span style={middleLine}></Span>
            <Span style={bottomLine}></Span>
          </BurgerWrapper>
          <HeaderNavWrapper>
            <Navigation />
          </HeaderNavWrapper>
        </div>
    </HeaderWrapper>
  )
}

export default Header
