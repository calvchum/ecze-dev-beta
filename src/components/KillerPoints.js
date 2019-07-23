import React from "react"
import styled from "styled-components"
import { Underline } from "./Underline"
import {
  lineWidths,
  colors,
  BodyText,
  paddingDefaults,
  media,
} from "../utilities"
import foodIcon from "../assets/icons/foodIcon.svg"
import stressIcon from "../assets/icons/stressIcon.svg"
import clothesIcon from "../assets/icons/clothesIcon.svg"
import environmentIcon from "../assets/icons/environmentIcon.svg"

const KillerPointsContainer = styled.div`
  background: ${colors.almostWhite}
  width: 100vw;  
`
const KillerPointsWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: ${paddingDefaults.topBottom} 0em;
  background: ${colors.almostWhite};
`

const CenteredBodyText = styled(BodyText)`
  text-align: center;
  padding: 1em;
  margin-bottom: 1em;
`
const IconSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, auto));
  grid-gap: 8px;
  justify-content: center;

  ${media.med`
    grid-template-columns: repeat( auto-fit, minmax(150px, auto) );
  `}
`
const IconSection = styled.div``

const Icon = styled.img`
  padding: 1.5em;
  width: 50%;
  ${media.med`
    padding: 1em;

  `}
`
const DescriptionText = styled.div`
  max-width: 672px;
  padding: 0em 1.5em 4em 1.5em;
  margin: 0 auto;
`

const IconBreakpointAlign = styled.div`
  ${media.med`
    text-align: center;
  `}
`

const KillerPoints = () => (
  <KillerPointsContainer>
    <KillerPointsWrapper>
      <DescriptionText>
        <BodyText style={{ textAlign: "justify" }}>
          Simply moisturising or using topical steroids for eczema is often as
          effective as taking an anti-depressant for depression. It is all about
          masking the symptoms as opposed to providing a holistic solution.
        </BodyText>
      </DescriptionText>

      <IconSectionWrapper>
        <IconSection>
          <CenteredBodyText>
            <Underline size={lineWidths.ctaUnderline} color={colors.secondary}>
              The Inside Stuff
            </Underline>
          </CenteredBodyText>
          <IconBreakpointAlign>
            <Icon src={foodIcon} alt="ECZE Logo" />
            <Icon src={stressIcon} alt="ECZE Logo" />
          </IconBreakpointAlign>
        </IconSection>

        <IconSection>
          <CenteredBodyText>
            <Underline size={lineWidths.ctaUnderline} color={colors.secondary}>
              The Outside Stuff
            </Underline>
          </CenteredBodyText>
          <IconBreakpointAlign>
            <Icon src={clothesIcon} alt="ECZE Logo" />
            <Icon src={environmentIcon} alt="ECZE Logo" />
          </IconBreakpointAlign>
        </IconSection>
      </IconSectionWrapper>
    </KillerPointsWrapper>
  </KillerPointsContainer>
)

export default KillerPoints
