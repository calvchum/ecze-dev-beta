import React from "react"
import styled from "styled-components"
import { colors, BodyText, HeaderText, paddingDefaults } from '../utilities'
import { CTAButton } from './Buttons'

const HeroBannerWrapper = styled.div`
  display: grid;
  grid: repeat(2, auto) / 1fr;
  justify-content: center;
  margin: 0em;
  padding: 4em 0em;
  max-width: 960px;
  margin: 0 auto;
`;
const HeroBannerText = styled.div`
  max-width: 672px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 3em;
`;


const HeroBanner = () => (
  <HeroBannerWrapper>
    <HeroBannerText>
      <HeaderText>Fed up with eczema? You’ve come to the right place.</HeaderText>
      <BodyText>We provide simple and holistic remedies to help you overcome your eczema.</BodyText>
    </HeroBannerText>
    <ButtonWrapper>
      <CTAButton />
    </ButtonWrapper>
  </HeroBannerWrapper>
)

export default HeroBanner;
