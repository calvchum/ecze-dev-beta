import styled from "styled-components"

export const Underline = styled.span`
	border-bottom: ${props => props.size}px solid ${props => props.color};
`;
// Example: <Underline size={lineWidths.ctaUnderline} color={colors.secondary}>
// Should put proptypes in HERE