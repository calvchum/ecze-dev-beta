import React from "react"
import styled from "styled-components"
import { Underline } from "./Underline"
import {
  lineWidths,
  colors,
  BodyText,
  HeaderText,
  paddingDefaults,
  media,
  BackgroundColor,
} from "../utilities"
import holistic from "../assets/bt-icons/holistic.svg"
import community from "../assets/bt-icons/community.svg"
import excited from "../assets/bt-icons/excited.svg"
import { useSpring, animated } from "react-spring"

const KillerPointsWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: ${paddingDefaults.topBottom} 0em;
`

export const CenteredHeaderText = styled(HeaderText)`
  text-align: center;
  margin-bottom: 1em;
`
export const IconSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  grid-gap: 2em;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.img`
  padding: 1.5em;
  ${media.med`
    padding: 1em;
  `}
`

export const IndividualIconWrapper = styled.div`
  max-width: 300px;
  &:nth-child(2) {
    text-align: justified;
  }
`

const KillerPoints = () => {
  return (
    <BackgroundColor color={colors.white}>
      <KillerPointsWrapper>
        <CenteredHeaderText>
          <Underline size={lineWidths.ctaUnderline} color={colors.secondary}>
            What we do
          </Underline>
        </CenteredHeaderText>
        <IconSectionWrapper>
          <IndividualIconWrapper>
            <Icon src={holistic} alt="ECZE Logo" />
            <BodyText>
              We provide simple and holistic remedies to help you overcome your
              eczema.
            </BodyText>
          </IndividualIconWrapper>
          <IndividualIconWrapper>
            <Icon src={community} alt="ECZE Logo" />
            <BodyText>
              We’re building a community of like-minded eczema fighters to share
              the ups and downs.
            </BodyText>
          </IndividualIconWrapper>
          <IndividualIconWrapper>
            <Icon src={excited} alt="ECZE Logo" />
            <BodyText>
              We’re also busy behind the scenes creating eczema-friendly
              products that will leave your skin feeling super comfortable.
            </BodyText>
          </IndividualIconWrapper>
        </IconSectionWrapper>
      </KillerPointsWrapper>
    </BackgroundColor>
  )
}

export default KillerPoints
