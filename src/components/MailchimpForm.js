import React, { Component } from "react"
import { Underline } from './Underline'
import styled from "styled-components"
import { media, colors, lineWidths, HeaderBaselines, fontsize, BodyText } from '../utilities'
import mailIcon from "../assets/icons/mail.svg"

const EmailInput = styled.input `
  width: 300px;
  padding: calc(1em - 4px);
  border: none;
  border-bottom: 4px solid ${colors.primary};
	margin-right: 0.5em;
  &:focus {
    outline: none;
  }
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

	}
	&:focus {
		outline: none;
	}
`;	

// const MailIcon = styled.img`
// 	width: 24px;
// 	margin: 0em 0.5em ;
// 	&:hover {
// 		color: ${colors.almostBlack};
// 	}
// `;

class MailchimpForm extends Component {
	render() {
		return (
			<div>
				{/* the email form has to wrapped in a form tag that contains the following action and method props */}
				<form
					action="https://gmail.us20.list-manage.com/subscribe/post"
					method="POST"
				>
					{/* there are two hidden inputs that have the following specific value and names */}
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
				{/* the submit button should be an input type="submit" */}
					<SignUpButtonStyle 
						type="submit"
					></SignUpButtonStyle>
				</form>
			</div>
		)
	}
}

export default MailchimpForm
