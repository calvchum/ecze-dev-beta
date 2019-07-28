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
  &:hover {
    transform: scale3d(1.1, 1.1, 1.1);
  }
  ${media.med`
    margin-bottom: 0em;
  `}
`

const SocialMediaIcons = () => (
  <SocialMedia>
    <SocMediaIcon src={facebookIcon} alt="FB Logo" />
    <SocMediaIcon src={instagramIcon} alt="INSTA Logo" />
    <SocMediaIcon src={youtubeIcon} alt="YT Logo" />
  </SocialMedia>
)

export default SocialMediaIcons
