import React from "react"
import Layout from "../components/layout"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"
import SEO from "../components/seo"
import HeroBanner from "../components/HeroBanner"
import KillerPoints from "../components/KillerPoints"
import HeaderSubheader from "../components/HeaderSubheader"
import ReadBlog from "../components/ReadBlog"
import { colors } from '../utilities'
import eczeGrey from '../assets/logo/grey.svg'

const WelcomeMat = styled(animated.div)`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background ${colors.almostWhite};
	display: flex;
	align-items: center;
	justify-content: center;

	& img {
		width: 100px;
		height: auto;
	}
`

const IndexPage = () => {
	const pageFade = useSpring({
		from: { opacity: 1, transform: 'translate3d(0%, 0, 0)' },
		to: async (next, cancel) => {
	    await next({opacity: 0})
	    await next({transform: 'translate3d(-100%, 0, 0)'})
  },
  config: { duration: 1000 },
  delay: 1000
})

return (
		<Layout>
			<WelcomeMat style={pageFade}>
				<img src={eczeGrey} alt="Ecze LOGO"/>
			</WelcomeMat>
			<SEO title="Home" />
			<HeroBanner />
			<KillerPoints />
			<HeaderSubheader />
			<ReadBlog />
		</Layout>
	)
}

export default IndexPage
