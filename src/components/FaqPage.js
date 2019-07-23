import styled from 'styled-components'
import { animated } from 'react-spring'
import { colors, media } from '../utilities'

export const FaqHeaderWrapper = styled.div`
	padding-top: 3em;
	& h2 {
		padding: 0.5em 0em 2em 0em;
	}
`;

export const FaqWrapper = styled.div`
	max-width: 960px;
	margin: 0 auto;
	${media.med`
		padding: 0em 1em;
	`}
`;

export const QuestionAnswer = styled(animated.div)`
	border-bottom: 1px ${colors.almostBlack} solid;
	padding: 1em 0em;
	&:first-child {
		border-top: 1px ${colors.almostBlack} solid;
	}
`;

export const QuestionWrapper = styled.div`
	padding-bottom: 4em
`;

export const QuestionArrow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	& img {
		margin: 0em 1.5em 0em 0.5em;
		transform-origin: 50% 50%;
		width: 20px;
	}
`;
