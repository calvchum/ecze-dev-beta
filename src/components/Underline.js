import React from "react"
import styled from "styled-components"

export const Underline = styled.span`
	border-bottom: ${props => props.size}px ${props => props.color} solid;
`;
// Example: <Underline size={lineWidths.ctaUnderline} color={colors.secondary}>
// Should put proptypes in HERE