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
  text-align: center;
  padding: 1em;
  margin-bottom: 1em;
`;


const IconSectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(400px, auto) );
  grid-gap: 8px;
  justify-content: center;
`;
const IconSection = styled.div`
`;

const Icon = styled.img`
   padding: 1.5em;
`;
const DescriptionText = styled.div`
  max-width: 672px;
  padding: 4em 1.5em;
  margin: 0 auto;
`;



const KillerPoints = () => (
  <KillerPointsContainer>
    <KillerPointsWrapper>
      <DescriptionText>
        <BodyText>Simply moisturising or using topical steroids for eczema is often as effective as taking an anti-depressant for depression. It is all about masking the symptoms as opposed to providing a holistic solution.</BodyText>
      </DescriptionText>
    
      <IconSectionWrapper>

        <IconSection>
          <UnderlinedPhrase>The Inside Stuff</UnderlinedPhrase>
          <div>
            <Icon src={require('../assets/icons/idea.svg')} alt="ECZE Logo" /> 
            <Icon src={require('../assets/icons/solution.svg')} alt="ECZE Logo" />   
          </div>
        </IconSection> 

        <IconSection>
          <UnderlinedPhrase>The Outside Stuff</UnderlinedPhrase>
          <div>
            <Icon src={require('../assets/icons/idea.svg')} alt="ECZE Logo" /> 
            <Icon src={require('../assets/icons/solution.svg')} alt="ECZE Logo" />   
          </div>
        </IconSection> 

      </IconSectionWrapper>
    </KillerPointsWrapper>
    
  </KillerPointsContainer>
)

export default KillerPoints;
