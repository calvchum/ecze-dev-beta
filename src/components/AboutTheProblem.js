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
import placeholder from "../assets/placeholders/baby.svg"

const ContentWrapper = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	padding: 3em 0em;
	max-width: 960px;
	margin: 0 auto;

	${media.med`
		padding: 3em 1em;
	`}
`

const SectionWrapper = styled.div`
	display: grid;
  grid-template-columns: repeat(2, minmax(340px, 1fr));
	grid-gap: 1em;
	padding-top: 2em;
	& img {
		margin-bottom: 0px;
	}
	${media.med`
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, 1fr);
	`}
`

const Order = styled.div`
	order: 0;
	${media.med`
		order: 2;
	`}
`

const backgroundStyles = {
	backgroundImage: `url(${placeholder})`,
	height: '100%',
	width: '100%'
}

const AboutTheProblem = () => {
		const [ref, inView] = useInView({
		threshold: 0.25,
	})
	const props = useSpring({ opacity: inView ? 1 : 0 })
  return (
  	<animated.div ref={ref} style={props}>
			<BackgroundColor color={colors.almostWhite}>
				<ContentWrapper>
					<HeaderText> 
					{" "}
					If you are feeling defeated with itchy red, scaly dry skin, 
				you’re not alone.</HeaderText>
					<BodyText>An Australian first study, the PEEK STUDY, has finally helped shed light on atopic dermatitis, revealing the often devasting impact it can have on a sufferer’s overall wellbeing and quality of life.
					</BodyText>
					<SectionWrapper>
						<div>
							<SubheaderText style={{margin: '0px'}}>
							Importantly it was found that more than half of all participants living with severe (53%) and very severe AD (54%) said doctors tell them there is nothing we can do.
							{" "}
							</SubheaderText>
						</div>
						<Order>
							<div style={backgroundStyles}></div>
						</Order>
					</SectionWrapper>
					<SectionWrapper>
						<div>
							<BodyText style={{paddingBottom: '0.5em'}}>Luckily, here at ECZE, we don’t agree with this. In fact, we think there’s plenty that can be done to help you or your loved one’s situation. </BodyText>
							<BodyText>Our aim is to provide you a safe place to explore holistic remedies to help you overcome your eczema{" "}</BodyText>
						</div>
						<div style={backgroundStyles}></div>
					</SectionWrapper>
					<FormWrapper>
						<CTAButton link="getstarted" cta="Let's get started" />
					</FormWrapper>
				</ContentWrapper>
			</BackgroundColor>
		</animated.div>

  );
};


export default AboutTheProblem