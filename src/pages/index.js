import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"
import SEO from "../components/seo"
import { MailHeroBanner, CTAHeroBanner } from "../components/HeroBanner"
import KillerPoints from "../components/KillerPoints"
import { CTAButton } from "../components/Buttons"
import HeaderSubheader from "../components/HeaderSubheader"
import ReadBlog from "../components/ReadBlog"
import AboutTheProblem from "../components/AboutTheProblem"
import { Underline } from "../components/Underline"
import {
	colors,
	SubheaderText,
	HeaderText,
	BodyText,
	lineWidths,
} from "../utilities"
import eczeGrey from "../assets/logo/grey.svg"
import backgroundGreen from "../assets/backgrounds/pattern-green.svg"
import Fade from "react-reveal/Fade"

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
	z-index: 1;
	& img {
		width: 100px;
		height: auto;
	}
`
const IndexPage = props => {
	const pageFade = useSpring({
		from: { opacity: 1, transform: "translate3d(0%, 0, 0)" },
		to: async (next, cancel) => {
			await next({ opacity: 0 })
			await next({ transform: "translate3d(-100%, 0, 0)" })
		},
		config: { duration: 1000 },
		delay: 1000,
	})

	return (
		<Layout props={props}>
			<div>
				<WelcomeMat style={pageFade}>
					<img src={eczeGrey} alt="Ecze LOGO" />
				</WelcomeMat>
				<SEO title="Home" />
				{/* pass down a prop "true" when page loads*/}
				<MailHeroBanner
					blur={true}
					header="Hey you! Fed up with eczema? You’ve come to the right place."
					subheader="Pop your email below and we'll keep you posted on what we're working on and useful eczema tips to beat the itch."
					color={colors.white}
					textColor={colors.almostWhite}
				/>
				<Fade>
					<AboutTheProblem />
					<KillerPoints />
					<ReadBlog />
				</Fade>
			</div>
		</Layout>
	)
}

export default IndexPage
