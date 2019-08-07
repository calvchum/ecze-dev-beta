import React from 'react';
import styled from 'styled-components';
import { colors, HeaderText, media, BodyText, SubheaderText, lineWidths, BackgroundColor } from '../utilities';
import { Underline } from './Underline';
import { CTAButton } from './Buttons'
import { HeroBannerWrapper, FormWrapper, HeroBannerText } from './HeroBanner'
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
	grid-template-columns: 1fr 1fr;
	grid-gap: 1em;
	padding-top: 2em;
	& img {
		margin-bottom: 0px;

	}
	${media.med`
		grid-template-columns: 1fr;
		align-items: center;
	`}
`

const AboutTheProblem = () => {
  return (
		<BackgroundColor color={colors.almostWhite}>
			<ContentWrapper>
				<HeaderText> If you are feeling defeated with itchy red, scaly dry skin, 
			you’re not alone.</HeaderText>
				<BodyText>An Australian first study, the PEEK STUDY, has finally helped shed light on atopic dermatitis, revealing the often devasting impact it can have on a sufferer’s overall wellbeing and quality of life.
				</BodyText>
				<SectionWrapper>
					<img style={{width: '100%'}} src={placeholder} alt=""/>
					<SubheaderText style={{margin: '0px'}}>Importantly it was found that more than half of all participants living with severe (53%) and very severe AD (54%) said doctors tell them there is nothing we can do.</SubheaderText>
				</SectionWrapper>
				<SectionWrapper>
					<img style={{width: '100%'}} src={placeholder} alt=""/>
					<div>
						<BodyText>Luckily, here at ECZE, we don’t agree with this. In fact, we think there’s plenty that can be done to help you or your loved one’s situation. </BodyText>
						<BodyText>Our aim is to provide you a safe place to explore holistic remedies to help you overcome your eczema</BodyText>
					</div>
				</SectionWrapper>
				<FormWrapper>
					<CTAButton link="getstarted" cta="Let's get started" />
				</FormWrapper>
			</ContentWrapper>
		</BackgroundColor>
  );
};

export default AboutTheProblem;
