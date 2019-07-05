import React from "react"
import styled from "styled-components"
import { colors, BodyText } from '../utilities'

const KillerPointsContainer = styled.div`
  background: ${colors.almostWhite}
  width: 100vw;
`;
const KillerPointsWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const UnderlinedPhrase = styled(BodyText)`
  border-bottom: 8px ${colors.secondary} solid;
`;

const IconSectionWrapper = styled.div`
  display: grid;
  grid: 1fr / 1fr 1fr;
  justify-content: center;
`;
const IconSection = styled.div`
  // display: grid;
  // grid: repeat(2, auto) / 1fr;
  // align-items: center;
`;

const Icon = styled.img`
  padding: 1.5em 1.5em;
`;



const KillerPoints = () => (
  <KillerPointsContainer>
    <KillerPointsWrapper>
      <div>
        <BodyText>Simply moisturising or using topical steroids for eczema is often as effective as taking an anti-depressant for depression. It is all about masking the symptoms as opposed to providing a holistic solution.</BodyText>
      </div>

      <IconSectionWrapper>

        <IconSection>
          <UnderlinedPhrase>The Inside Stuff</UnderlinedPhrase>
          <div>
            <Icon src={require('../assets/icons/idea.svg')} alt="ECZE Logo" /> 
            <Icon src={require('../assets/icons/solution.svg')} alt="ECZE Logo" />   
          </div>
        </IconSection> 

        <IconSection>
        <div>
          <UnderlinedPhrase>The Outside Stuff</UnderlinedPhrase>
          
        </div>
          <div>
            <Icon src={require('../assets/icons/search.svg')} alt="ECZE Logo" /> 
            <Icon src={require('../assets/icons/solution.svg')} alt="ECZE Logo" />   
          </div>
        </IconSection> 

      </IconSectionWrapper>
    </KillerPointsWrapper>
    
  </KillerPointsContainer>
)

export default KillerPoints;
