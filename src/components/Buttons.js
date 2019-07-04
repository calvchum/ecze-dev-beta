import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { colors, HeaderBaselines, fontsize } from '../utilities'

// import styled from "styled-components"

const CTAButtonStyle = styled.button`
	${HeaderBaselines}
	font-size: ${fontsize.h1};
	border: none;
	padding: 0px 0px 8px 0px;
	border-bottom: 8px ${colors.primary} solid;
	transition: 0.3s;
	& img {
		margin: 0em;
		padding-left: 0.5em;
	}
	&:hover {
		transform: translateX(10px);
		cursor: pointer;
	}
`;	


export const CTAButton = () => (
  <Link to="getstarted">
    <CTAButtonStyle>
    Lets get started  
    <img src={require('../assets/icons/arrow.svg')} alt="left arrow" />   
    </CTAButtonStyle>
  </Link>
)


