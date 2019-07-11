import React from "react"
import styled from "styled-components"
import { colors, lineWidths, SubheaderText, BodyText } from '../utilities'
import { Underline } from './Underline'
import { SignUpButton } from './Buttons'

const SignUpWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 200px;
  align-items: center;
  padding: 0em 3em;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

`;

const Input = styled.input `
  width: 300px;
  height: 40px;
  border: none;
  &:focus {
    outline: none;

  }
`;


const SignUpForm = () => (
  <SignUpWrapper>
    <SubheaderText>Keep up to date with our commnity and recommended products.</SubheaderText>
    <InputWrapper>
      <Underline size={lineWidths.ctaUnderline} color={colors.primary}>
        <Input 
          type="text"
          placeholder="x Email"
        />
        </Underline>
      <SignUpButton cta="Subscribe" background="primary" color="almostWhite" />
    </InputWrapper>
  </SignUpWrapper>
)

export default SignUpForm
