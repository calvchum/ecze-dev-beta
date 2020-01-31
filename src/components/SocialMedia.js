import React from "react"
import styled from "styled-components"
import { media } from "../utilities"
import facebookIcon from "../assets/icons/facebook.svg"
import instagramIcon from "../assets/icons/instagram.svg"

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
    <a
      href="https://www.facebook.com/ECZE-Cotton-107931974087325/?view_public_for=107931974087325"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SocMediaIcon src={facebookIcon} alt="FB Logo" />
    </a>
    <a
      href="https://www.instagram.com/eczecotton/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <SocMediaIcon src={instagramIcon} alt="INSTA Logo" />
    </a>
  </SocialMedia>
)

export default SocialMediaIcons
