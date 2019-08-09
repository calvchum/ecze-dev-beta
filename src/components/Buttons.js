import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { Underline } from "./Underline"
import { colors, lineWidths, HeaderBaselines, fontsize, media } from "../utilities"

const CTAButtonStyle = styled.button`
	${HeaderBaselines}
	font-size: ${fontsize.h1};
	background-color: transparent;
	border: none;
	padding: 0px 0px 8px 0px;
	transition: 0.3s;
	line-height: 140%;
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
	&:focus {
		outline: none;
	}

	${media.med`
		font-size: ${fontsize.subheader};
	`}
`

export const CTAButton = ({ cta, link }) => (
	<Link to={`/${link}`}>
		<CTAButtonStyle>
			<Underline size={lineWidths.ctaUnderline} color={colors.primary}>
				{cta}
				<img src={require("../assets/icons/arrow.svg")} alt="left arrow" />
			</Underline>
		</CTAButtonStyle>
	</Link>
)
