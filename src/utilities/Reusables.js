import styled from "styled-components"
import { colors } from "./Colors"
import bgGreen from '../assets/backgrounds/pattern-green.svg'

export const BackgroundColor = styled.div`
	background: ${props => props.color};
`;

export const BackgroundImage = styled.div`
  background-image: url(${bgGreen});
`;