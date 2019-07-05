import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Navigation from "./Navigation"
import { colors, SubheaderText, BodyText } from "../utilities"
import facebookIcon from "../assets/icons/facebook.svg"
import instagramIcon from "../assets/icons/instagram.svg"
import youtubeIcon from "../assets/icons/youtube.svg"

const FooterWrapper = styled.section`
  display: grid;
  grid: repeat(2, auto) / 3fr 2fr;
  padding: 3em;
  background: ${colors.almostWhite};
  justify-content: center;
`

const SocialMedia = styled.div`
  display: flex;
`

const SocMediaIcon = styled.img`
  padding: 0em 0.5em;
`

const AboutEcze = styled.div``

const ContactEcze = styled.div`
  padding-left: 2em;
`

const FooterNavWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0em;
  padding-left: 2em;
  padding-bottom: 2em;
`

const Footer = () => (
  <FooterWrapper>
    <SocialMedia>
      <SocMediaIcon src={facebookIcon} alt="FB Logo" />
      <SocMediaIcon src={instagramIcon} alt="INSTA Logo" />
      <SocMediaIcon src={youtubeIcon} alt="YT Logo" />
    </SocialMedia>
    <FooterNavWrapper>
      <SubheaderText>More Info</SubheaderText>
      <Navigation />
    </FooterNavWrapper>
    <AboutEcze>
      <SubheaderText>About ECZE</SubheaderText>
      <BodyText>
        We bring you products that are safe, non-toxic, and highly effective. We
        believe in tangible results you can see and feel, and we believe in the
        power of nature to bring these results.
      </BodyText>
    </AboutEcze>
    <ContactEcze>
      <SubheaderText>Contact</SubheaderText>
      <BodyText>Bec & Terrence</BodyText>
      <BodyText>hello@ecze.com.au</BodyText>
      <BodyText>Melbourne, Australia</BodyText>
    </ContactEcze>
  </FooterWrapper>
)

export default Footer
