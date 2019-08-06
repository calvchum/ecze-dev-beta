import React from "react"
import styled from "styled-components"
import Navigation from "./Navigation"
import {
  colors,
  SubheaderText,
  BodyText,
  media,
  BackgroundColor
} from "../utilities"
import SocialMediaIcons from './SocialMedia'
import facebookIcon from "../assets/icons/facebook.svg"
import instagramIcon from "../assets/icons/instagram.svg"
import youtubeIcon from "../assets/icons/youtube.svg"

const FooterWrapper = styled.section`
  display: grid;
  grid: repeat(2, auto) / 3fr 2fr;
  padding: 3em 1em;
  background: ${colors.almostWhite};
  justify-content: center;
  max-width: 960px;
  margin: 0 auto;
  ${media.med`
    padding: 2em 1em 1em 1em;
    grid: repeat(4, auto) / 1fr;
    grid-gap: 1em;
  `}
`

const AboutEcze = styled.div`
  ${media.med`
    text-align: justify;
    order: 0;
  `}
`

const ContactEcze = styled.div`

  ${media.med`
    padding-bottom: 2em;
    order: 2;
  `}
`

const FooterNavWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0em;
  padding-bottom: 2em;

  ${media.med`
    display: none;
    padding-bottom: 0em;
  `}
`

const Footer = () => (
  <BackgroundColor color={colors.almostWhite}>
    <FooterWrapper>
      <AboutEcze>
        <SubheaderText>About Ecze</SubheaderText>
        <BodyText>We provide simple and holistic remedies to help you overcome your eczema.</BodyText>
      </AboutEcze>
      <FooterNavWrapper>
        <SubheaderText>More Info</SubheaderText>
        <Navigation />
      </FooterNavWrapper>
      <ContactEcze>
        <SubheaderText>Get in Touch</SubheaderText>
        <a href="mailto:hello@ecze.co"><BodyText style={{paddingBottom: '0.5em', textDecoration: 'underline'}}>hello@ecze.co</BodyText></a>
        <BodyText>PO BOX 715, Brentford Square, <br />Victoria, Melbourne 3131</BodyText>
      </ContactEcze>
      <SocialMediaIcons />
    </FooterWrapper>
  </BackgroundColor>
)

export default Footer
