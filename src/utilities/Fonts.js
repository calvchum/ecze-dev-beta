// GATSBY RECOMMENDS TYPOGRAPHY.JS
import Typography from "typography"
import styled from "styled-components"
import { animated } from "react-spring"

// THIS OBJECT CALLS GOOGLE FONT API
const typography = new Typography({
  baseFontSize: "16px",
  bodyFontFamily: ["DM Sans", "sans-serif"],
  headerFontFamily: ["DM Sans", "sans-serif"],
  googleFonts: [
	  {
	    name: 'DM Sans',
	    styles: [
	      '400',
	      '500'
	    ],
	  }
	],
})


// TYPORGRAPHY SETUP OBJECTS
export const fontsize = {
	hero: '2.67em',
	h1: '2.3em',
	subheader: '1.3em',
	body: '1em'
}

export const NavLinksFont = {
	fontFamily: 'DM Sans',
	fontWeight: '400'
}

export const HeaderBaselines = {
	margin: '0.4em 0em',
	fontFamily: 'DM Sans',
	fontWeight: '500'
}

// TYPOGRAPHY STYLED COMPONENTS
export const HeroText = styled.h1`
	${HeaderBaselines}
	font-size: ${fontsize.hero};
`;

export const HeaderText = styled.h1`
	${HeaderBaselines}
	font-size: ${fontsize.h1};
	line-height: 140%;

`;
export const SubheaderText = styled.h2`
	${HeaderBaselines}
	font-size: ${fontsize.subheader};
	line-height: 140%;
`;

export const BodyText = styled(animated.p)`
	font-size: ${fontsize.body};
	margin: 0em;
	font-family: 'DM Sans';
	font-weight: 400;
`;

export default typography;
