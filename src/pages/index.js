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
import { colors } from "../utilities"
import eczeGrey from "../assets/logo/grey.svg"

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

const IndexPage = () => {
	const [count, setCount] = useState(50)
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
		<Layout>
			<WelcomeMat style={pageFade}>
				<img src={eczeGrey} alt="Ecze LOGO" />
			</WelcomeMat>
			<SEO title="Home" />
			{/* pass down a prop "true" when page loads*/}
			<MailHeroBanner
				blur={true}
				header="Hey you! Fed up with eczema? You’ve come to the right place."
				subheader="Sign up below to get regular updates and free eczema info. "
				color={colors.almostWhite}			/>
			<KillerPoints />

			<CTAHeroBanner
				header="If you are feeling defeated with itchy red, scaly dry skin, 
you’re not alone. "
				subheader="Our aim is to provide you a safe place to explore holistic remedies to help you overcome your eczema."
				cta="Lets get started"
				link="getstarted"
				color={colors.almostWhite}
			/>
			<MailHeroBanner
				header="Take control of your eczema today and sign up for ongoing helpful tips overcome the itch."
				subheader="We send super-helpful, non-annoying emails. Pop your email in and let us prove it to you. Our aim is to provide you a safe place to explore holistic remedies to help you overcome your eczema."
				color={colors.white}
			/>
			<ReadBlog />
		</Layout>
	)
}

export default IndexPage
