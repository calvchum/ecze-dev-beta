import React from "react"
import styled from "styled-components"
import { Underline } from './Underline'
import { lineWidths, colors, BodyText, HeaderText, paddingDefaults } from '../utilities'

const HeaderSubheader = ({ header, subheader, textColor }) => {
	

const HeaderSubheaderWrapper = styled.div`
	max-width: 960px;
	margin: 0 auto;
	color: ${textColor};
`;


	return (
		<HeaderSubheaderWrapper>
			<HeaderText>{header}</HeaderText>
			<BodyText>{subheader}</BodyText>
		</HeaderSubheaderWrapper>
	)
}

export default HeaderSubheader;
