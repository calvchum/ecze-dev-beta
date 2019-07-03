import React from "react"
import styled from "styled-components"
import Navigation from "./Navigation"
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
const header = "header";

const Header = () => (
  <HeaderWrapper>
    <LogoWrapper src={require('../assets/logo/white.svg')} alt="ECZE Logo" />   
    <Navigation location='header' />
  </HeaderWrapper>
)

export default Header
