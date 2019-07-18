import React from "react"
import styled from "styled-components"
import { Underline } from './Underline'
import { lineWidths, colors, BodyText, HeaderText, paddingDefaults } from '../utilities'

const HeaderSubheaderWrapper = styled.div`
	max-width: 960px;
	margin: 0 auto;
	padding: ${paddingDefaults.topBottom} 1.5em;

	& h1:first-child {
		padding-bottom: 0.4em;
	}
`;

const HeaderSubheader = () => (
	<HeaderSubheaderWrapper>
		<HeaderText>Here at ECZE we look at the <Underline size={lineWidths.ctaUnderline} color={colors.secondary}>bigger picture</Underline></HeaderText>
		<BodyText>We look at why you’re suffering with eczema, provide holistic solutions for you to explore and develop your own effective management plan that actually works in the long-term! </BodyText>
	</HeaderSubheaderWrapper>
)

export default HeaderSubheader;
