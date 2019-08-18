import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import {
	colors,
	HeaderText,
	BodyText,
	SubheaderText,
	BackgroundColor,
	media,
} from "../utilities"
import { CTAButton } from "./Buttons"
import { FormWrapper } from "./HeroBanner"

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
	padding-top: 54px;
	align-items: center;
	
	${media.med`
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, 1fr);
	`}
`
const IconWrapper = styled.div`
	background-repeat: no-repeat;
  background-size: auto;
  min-height: 250px;
  background-position: center; 

  ${media.med`
		order: -1;
  `}
`

const AboutTheProblem = () => (
	<StaticQuery
		query={graphql`
			query HomePageImagesQuery {
				allContentfulAsset(
					filter: { title: { in: ["homePage-1", "homePage-2"] } }
				) {
					edges {
						node {
							title
							fluid(maxWidth: 500) {
								...GatsbyContentfulFluid
							}
							file {
								url
							}
						}
					}
				}
			}
		`}
		render={data => (
			<BackgroundColor color={colors.almostWhite}>
				<ContentWrapper>
					<HeaderText>
						If you are feeling defeated with itchy red, scaly dry skin, you’re
						not alone.
					</HeaderText>
					<BodyText>
						An Australian first study, the PEEK STUDY, has finally helped shed
						light on atopic dermatitis, revealing the often devasting impact it
						can have on a sufferer’s overall wellbeing and quality of life.
					</BodyText>
					<SectionWrapper >
						<IconWrapper style={{backgroundImage: `url(${data.allContentfulAsset.edges[0].node.file.url})`}} />
						<div>
							<SubheaderText style={{ margin: "0px" }}>
								Importantly it was found that more than half of all participants
								living with severe (53%) and very severe AD (54%) said doctors
								tell them there is nothing we can do.{" "}
							</SubheaderText>
						</div>
					</SectionWrapper>
					<SectionWrapper>
						<div>
							<SubheaderText style={{ paddingBottom: "0.5em" }}>
								Luckily, here at ECZE, we don’t agree with this. In fact, we
								think there’s plenty that can be done to help you or your loved
								one’s situation.{" "}
							</SubheaderText>
							<SubheaderText>
								Our aim is to provide you a safe place to explore holistic
								remedies to help you overcome your eczema{" "}
							</SubheaderText>
						</div>
						<IconWrapper style={{backgroundImage: `url(${data.allContentfulAsset.edges[1].node.file.url})`}} />
					</SectionWrapper>
					<FormWrapper>
						<CTAButton link="getstarted" cta="Let's get started" />
					</FormWrapper>
				</ContentWrapper>
			</BackgroundColor>
		)}
	/>
)

export default AboutTheProblem

