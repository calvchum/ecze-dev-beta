import React from "react"
import styled from "styled-components"
import {
  BodyText,
  HeaderText,
  paddingDefaults,
  media,
  colors,
  BackgroundColor,
} from "../utilities"
import { CTAButton } from "./Buttons"
import HeaderSubheader from "./HeaderSubheader"
import MailChimpForm from "./MailchimpForm"

const HeroBannerWrapper = styled.div`
  display: grid;
  grid: repeat(2, auto) / 1fr;
  justify-content: center;
  margin: 0em;
  padding: ${paddingDefaults.topBottom} 0em;
  max-width: 960px;
  margin: 0 auto;
  ${media.med`
    padding: ${paddingDefaults.topBottom} 1em;
  `}
`

const HeroBannerText = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const FormWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 3em;
`

export const MailHeroBanner = ({ blur, header, subheader, color }) => (
  <BackgroundColor color={color}>
    <HeroBannerWrapper>
      <HeroBannerText>
        <HeaderSubheader header={header} subheader={subheader} />
      </HeroBannerText>
      <FormWrapper>
        <MailChimpForm blur={blur} />
      </FormWrapper>
    </HeroBannerWrapper>
  </BackgroundColor>
)

export const CTAHeroBanner = ({ header, subheader, link, cta, color }) => (
  <BackgroundColor color={color}>
    <HeroBannerWrapper>
      <HeroBannerText>
        <HeaderSubheader header={header} subheader={subheader} />
      </HeroBannerText>
      <FormWrapper>
        <CTAButton cta={cta} link={link} />
      </FormWrapper>
    </HeroBannerWrapper>
  </BackgroundColor>
)
