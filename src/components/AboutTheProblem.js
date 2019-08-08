import React from "react"
import styled from "styled-components"
import {
	colors,
	HeaderText,
	BodyText,
	SubheaderText,
	lineWidths,
	BackgroundColor,
} from "../utilities"
import { Underline } from "./Underline"
import { CTAButton } from "./Buttons"
import { HeroBannerWrapper, FormWrapper, HeroBannerText } from "./HeroBanner"
import { useInView } from "react-intersection-observer"
import { useSpring, animated } from "react-spring"

const PaddedHeroText = styled(HeroBannerText)`
	& > * {
		padding: 1em 0em;
	}
`

const AboutTheProblem = () => {
	const [ref, inView] = useInView({
		threshold: 0.4,
	})
	const props = useSpring({ opacity: inView ? 1 : 0 })
	return (
		<animated.div ref={ref} style={props}>
			<BackgroundColor color={colors.almostWhite}>
				<HeroBannerWrapper>
					<PaddedHeroText>
						<HeaderText>
							{" "}
							If you are feeling defeated with itchy red, scaly dry skin, you’re
							not alone.
						</HeaderText>
						<BodyText>
							An Australian first study, the PEEK STUDY, has finally helped shed
							light on atopic dermatitis, revealing the often devasting impact
							it can have on a sufferer’s overall wellbeing and quality of life.
						</BodyText>
						<SubheaderText>
							Importantly it was found that more than half of all participants
							living with severe (53%) and very severe AD (54%) said doctors
							tell them{" "}
							<Underline
								size={lineWidths.ctaUnderline}
								color={colors.secondary}
							>
								there is nothing we can do.
							</Underline>
						</SubheaderText>
						<BodyText>
							Luckily, here at ECZE, we don’t agree with this. In fact, we think
							there’s plenty that can be done to help you or your loved one’s
							situation.{" "}
						</BodyText>
						<BodyText>
							Our aim is to provide you a safe place to explore holistic
							remedies to help you overcome your eczema
						</BodyText>
					</PaddedHeroText>
					<FormWrapper>
						<CTAButton link="getstarted" cta="Let's get started" />
					</FormWrapper>
				</HeroBannerWrapper>
			</BackgroundColor>
		</animated.div>
	)
}

export default AboutTheProblem
