import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Underline } from './Underline'
import { media, colors, lineWidths, HeaderBaselines, fontsize, BodyText } from '../utilities'
import mailIcon from "../assets/icons/mail.svg"


const CTAButtonStyle = styled.button`
	${HeaderBaselines}
	font-size: ${fontsize.h1};
	border: none;
	padding: 0px 0px 8px 0px;
	transition: 0.3s;
	& img {
		margin: 0em;
		transition: 0.3s;
		padding-left: 0.5em;
		&:hover {
			transform: translateX(10px);
		}
	}
	&:hover {
		transform: translateX(10px);
		cursor: pointer;
	}
`;	


export const CTAButton = ({ cta }) => (
  <Link to="getstarted">
    <CTAButtonStyle>
	    <Underline size={lineWidths.ctaUnderline} color={colors.primary}>{cta}
	    	<img src={require('../assets/icons/arrow.svg')} alt="left arrow" /> 
	    </Underline>  
    </CTAButtonStyle>
  </Link>
)


const SignUpButtonStyle = styled.button`
	display: flex;
	padding: 0.8em;
	border: ${lineWidths.signUp}px solid ${colors.almostBlack};
	background: white;
	color: ${colors.almostBlack};
	transition: 0.3s;
	& a {
		underline: none;
	}
	&:focus {
		outline: none;
	}
	&:hover {
		cursor: pointer;
		background: ${colors.almostBlack};
		color: ${colors.almostWhite};
	}
`;	

const MailIcon = styled.img`
	width: 24px;
	margin: 0em 0.5em ;
	&:hover {
		color: ${colors.almostBlack};
	}
`;

export const SignUpButton = ({ cta }) => (
  <Link style={{ textDecoration: 'none' }} to="getstarted">
    <SignUpButtonStyle>
	    <BodyText>{cta}</BodyText> 
	    <MailIcon src={mailIcon} alt="mail icon" />
    </SignUpButtonStyle>
  </Link>
)



