// GATSBY RECOMMENDS TYPOGRAPHY.JS
import Typography from "typography"

export const typography = new Typography({
  baseFontSize: "16px",
  googleFonts: [
	  {
	    name: 'DM Sans',
	    styles: [
	      '400',
	      '500'
	    ],
	  }
	],
  bodyFontFamily: ["DM Sans", "sans-serif"],
})
export const fontsize = {
	hero: '3em',
	h1: '2.25em',
	subheader: '1.5em',
	body: '1.125em'
}
