import React from "react"
import styled from "styled-components"
import { colors, lineWidths, SubheaderText, BodyText, BackgroundColor } from '../utilities'
import { Underline } from './Underline'
import { SignUpButton } from './Buttons'


const SignUpWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 0 auto;
  padding: 3em 0em;
  max-width: 960px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1em;
  & span:first-child {
    margin-right: 0.5em;
    display: flex;
    align-items: flex-end;
  }
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
  <BackgroundColor color='white'>
    <SignUpWrapper>
      <SubheaderText>Keep up to date with our commnity and recommended products.</SubheaderText>
      <InputWrapper>
        <Underline size={lineWidths.signUp} color={colors.almostBlack}>
          <Input 
            type="text"
            placeholder="x Email"
          />
          </Underline>
        <SignUpButton cta="Subscribe" />
      </InputWrapper>
    </SignUpWrapper>
  </BackgroundColor>
)

export default SignUpForm
