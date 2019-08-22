import React from "react"
import styled from "styled-components"
import Navigation from "./Navigation"
import {
  colors,
  SubheaderText,
  BodyText,
  media,
  BackgroundColor,
} from "../utilities"
import SocialMediaIcons from "./SocialMedia"

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
  padding-right: 1em;
  ${media.med`
    text-align: justify;
    padding-right: 1em;
    order: 1;
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

const DisclaimerContainer = styled.div`
  grid-column: 1 / -1;
  padding: 3em;
  ${media.small`
    grid-row: 3/4
    `}
`
const DisclaimerText = styled(BodyText)`
  font-size: 0.5em;
  opacity: 0.4;
`

const Footer = ({ path }) => (
  <BackgroundColor color={colors.almostWhite}>
    <FooterWrapper>
      <AboutEcze>
        <SubheaderText>About Ecze</SubheaderText>
        <BodyText>
          We provide simple and holistic remedies to help provide relief for
          your eczema.
        </BodyText>
      </AboutEcze>
      <FooterNavWrapper>
        <SubheaderText>More Info</SubheaderText>
        <Navigation path={path} />
      </FooterNavWrapper>
      <ContactEcze>
        <SubheaderText>Get in Touch</SubheaderText>
        <a href="mailto:hello@ecze.co">
          <BodyText
            style={{ paddingBottom: "0.5em", textDecoration: "underline" }}
          >
            hello@ecze.co
          </BodyText>
        </a>
        <BodyText></BodyText>
      </ContactEcze>
      <SocialMediaIcons />
      <DisclaimerContainer>
        <DisclaimerText>
          The Ecze Disclaimer: The contents of Ecze such as text, graphics,
          images, and other material contained on the Ecze site ("Content") are
          for informational purposes only. The Content is not intended to be a
          substitute for professional medical advice, diagnosis, or treatment.
          Always seek the advice of your physician or other qualified health
          provider with any questions you may have regarding a medical
          condition. Never disregard professional medical advice or delay in
          seeking it because of something you have read on the Ecze site.
        </DisclaimerText>
      </DisclaimerContainer>
    </FooterWrapper>
  </BackgroundColor>
)

export default Footer
