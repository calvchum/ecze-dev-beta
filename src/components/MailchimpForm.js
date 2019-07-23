import React, { Component } from "react"
import styled from "styled-components"
import { media, colors } from '../utilities'

const EmailInput = styled.input `
  width: 300px;
  padding: 1em;
  border: none;
  border-bottom: 4px solid ${colors.primary};
	margin-right: 0.5em;
  &:focus {
    outline: none;
  }

  ${media.med`
		width: 220px;
  `}
  ${media.small`
		width: 180px;
  `}
`;

const SignUpButtonStyle = styled.input`
	border: none;
	padding: 1em 1.2em;
	color: ${colors.almostWhite};
	background: ${colors.primary};
	transition: 0.2s;
	&:hover {
		color: ${colors.primary};
		background: ${colors.almostWhite};
    -webkit-box-shadow:inset 0px 0px 0px 4px ${colors.primary};
    -moz-box-shadow:inset 0px 0px 0px 4px ${colors.primary};
    box-shadow:inset 0px 0px 0px 4px ${colors.primary};
	}
	&:focus {
		outline: none;
	}
`;	

const SignUpGrid = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: auto 110px;
`;

class MailchimpForm extends Component {
	render() {
		return (
			<>
			{/* the email form has to wrapped in a form tag that contains the following action and method props */}
				<form
					action="https://gmail.us20.list-manage.com/subscribe/post"
					method="POST"
				>
					<SignUpGrid>
					{/* there are two hidden inputs that have the following specific value and names */}
						<div>
							<input type="hidden" name="u" value="c41941bbcbecdc562a2885df3" />
							<input type="hidden" name="id" value="b5400ff385" />
							{/* This is the input that the user puts email into */}
							<EmailInput
								name="MERGE0"
								type="email"
								id="mce-EMAIL"
								placeholder="x Email"
								pattern="(.+)@(.+){2,}\.(.+){2,}"
								required={true}
							/>
							
						</div>
					{/* the submit button should be an input type="submit" */}
						<SignUpButtonStyle 
							type="submit"
						></SignUpButtonStyle>
					</SignUpGrid>
				</form>
			</>
		)
	}
}

export default MailchimpForm
