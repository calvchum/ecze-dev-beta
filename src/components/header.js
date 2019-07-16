import React, { useState } from "react"
import { useSpring, animated } from 'react-spring'; 
import { Link } from "gatsby"
import styled from "styled-components"
import Navigation from "./Navigation"
import ResponsiveNav from "./ResponsiveNav"
import { paddingDefaults } from "../utilities"
import eczeLogoWhite from "../assets/logo/white.svg"
import burgerMenu from '../assets/icons/burger-menu.svg'
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

const BurgerWrapper = styled.img`
  display: none;
  z-index: 11;


  ${media.med`
    display: block;
    height: 24px;
    margin-bottom: 0em;
    margin-right: 0em;
    z-index: 11;
  `}
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
  console.log(isNavOpen)

  return (
    <HeaderWrapper>
      <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
        <LogoWrapper src={eczeLogoWhite} alt="ECZE Logo" />
      </Link>
          <ResponsiveNav style={navAnimation} />
        <div style={{zIndex: 15}}>
          <BurgerWrapper src={burgerMenu} onClick={() => setNavOpen(!isNavOpen)} />
          <HeaderNavWrapper>
            <Navigation />
          </HeaderNavWrapper>
        </div>
    </HeaderWrapper>
  )
}

export default Header
