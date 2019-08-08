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
import foodIcon from "../assets/icons/pearAnimated3.svg"
import stressIcon from "../assets/icons/relaxedStarsAnimated.svg"
import clothesIcon from "../assets/icons/pyjamasAnimated3.svg"
import environmentIcon from "../assets/icons/earthAnimated.svg"
import { useInView } from "react-intersection-observer"
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
const IconSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  grid-gap: 2em;
  justify-content: center;
  align-items: center;
`

const Icon = styled.img`
  padding: 1.5em;
  ${media.med`
    padding: 1em;
  `}
`

const IndividualIconWrapper = styled.div`
  max-width: 300px;
  &:nth-child(2) {
    text-align: justified;
  }
`

const KillerPoints = () => {
  const [ref, inView] = useInView({
    threshold: 0.4,
  })
  const props = useSpring({ opacity: inView ? 1 : 0 })

  return (
    <animated.div ref={ref} style={props}>
      <BackgroundColor color={colors.white}>
        <KillerPointsWrapper>
          <CenteredHeaderText>
            <Underline size={lineWidths.ctaUnderline} color={colors.secondary}>
              What we do
            </Underline>
          </CenteredHeaderText>
          <IconSectionWrapper>
            <IndividualIconWrapper>
              <Icon src={foodIcon} alt="ECZE Logo" />
              <BodyText>
                We provide simple and holistic remedies to help you overcome
                your eczema.
              </BodyText>
            </IndividualIconWrapper>
            <IndividualIconWrapper>
              <Icon src={stressIcon} alt="ECZE Logo" />
              <BodyText>
                We’re building a community of like-minded eczema fighters to
                share the ups and downs.
              </BodyText>
            </IndividualIconWrapper>
            <IndividualIconWrapper>
              <Icon src={environmentIcon} alt="ECZE Logo" />
              <BodyText>
                We’re also busy behind the scenes creating eczema-friendly
                products that will leave your skin feeling super comfortable.
              </BodyText>
            </IndividualIconWrapper>
          </IconSectionWrapper>
        </KillerPointsWrapper>
      </BackgroundColor>
    </animated.div>
  )
}

export default KillerPoints
