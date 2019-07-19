import React from "react"
import styled from "styled-components"
import {
  colors,
  lineWidths,
  SubheaderText,
  BodyText,
  BackgroundColor,
  media,
} from "../utilities"
import { Underline } from "./Underline"
import { SignUpButton } from "./Buttons"
import MailchimpForm from "./MailchimpForm"

const SignUpWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin: 0 auto;
  padding: 3em 0em;
  max-width: 960px;

  ${media.med`
    padding: 3em 1em;
    align-items: flex-start;
  `}
`

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1em;
  & span:first-child {
    margin-right: 0.5em;
    display: flex;
    align-items: flex-end;
  }
`

const SignUpForm = () => (
  <BackgroundColor color="white">
    <SignUpWrapper>
      <SubheaderText>
        Keep up to date with our community and recommended products.
      </SubheaderText>
      <InputWrapper>
        <MailchimpForm />
      </InputWrapper>
    </SignUpWrapper>
  </BackgroundColor>
)

export default SignUpForm
