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
  & span:first-child {
    margin-right: 0.5em;
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
)

export default SignUpForm
