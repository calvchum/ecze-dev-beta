import React from "react"
import styled from "styled-components"
import { media } from "../utilities"
import facebookIcon from "../assets/icons/facebook.svg"
import instagramIcon from "../assets/icons/instagram.svg"
import youtubeIcon from "../assets/icons/youtube.svg"


const SocialMedia = styled.div`
  display: flex;

  ${media.med`
    order: 1;
    padding: 1em 0em;
  `}
`

const SocMediaIcon = styled.img`
  padding: 0.5em 0.5em;
  transition: 0.1s;
  height: 70px;
  margin-bottom: 0em;
  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  ${media.med`
    padding: 0.3em 0.3em;
  `}
`

const SocialMediaIcons = () => (
  <SocialMedia>
    <a href="􏰓􏰈􏰈􏰤􏰇􏰥􏰚􏰚􏰙􏰙􏰙􏰖􏰃􏰏􏰇􏰈􏰋􏰝􏰌􏰋􏰔􏰖􏰎􏰁􏰔􏰚􏰅􏰎􏰠􏰅􏰒􏰃􏰝􏰓􏰈􏰅􏰌􏰚􏰓􏰈􏰈􏰤􏰇􏰥􏰚􏰚􏰙􏰙􏰙􏰖􏰃􏰏􏰇􏰈􏰋􏰝􏰌􏰋􏰔􏰖􏰎􏰁􏰔􏰚􏰅􏰎􏰠􏰅􏰒􏰃􏰝􏰓􏰈􏰅􏰌􏰚https://www.facebook.com/Ecze" target="_blank"><SocMediaIcon src={facebookIcon} alt="FB Logo" /></a>
    <a href="https://www.instagram.com/eczefighter/" target="_blank"><SocMediaIcon src={instagramIcon} alt="INSTA Logo" /></a>
  </SocialMedia>
)

export default SocialMediaIcons
