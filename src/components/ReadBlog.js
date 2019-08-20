import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import {
	colors,
	BodyText,
	paddingDefaults,
	media,
	BackgroundColor,
} from "../utilities"
import { CTAButton } from "./Buttons"
import holistic from "../assets/bt-icons/holistic.svg"
import community from "../assets/bt-icons/community.svg"
import excited from "../assets/bt-icons/excited.svg"
import HeaderSubheader from "./HeaderSubheader"
import Mentalhealth from "../assets/bt-icons/Mental health.svg"
import Lifestyle from "../assets/bt-icons/lifestyle.svg"
import Fitness from "../assets/bt-icons/Fitness.svg"
import Diet from "../assets/bt-icons/Diet.svg"

const ReadBlogWrapper = styled.div`
	max-width: 960px;
	margin: 0 auto;
	padding: 0em 1em;
	display: flex;
	flex-direction: column;
	& > * {
		padding: 1em 0em;
	}
`
const CenteredBodyText = styled(BodyText)`
	text-align: center;
`
const IconSectionWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, auto));
	grid-gap: 2em;
	justify-content: center;
	align-items: center;
`

const Icon = styled.img`
	padding: 1.5em;
	margin-bottom: 0px;
	${media.med`
    padding: 1em;
  `}
`

const IndividualIconWrapper = styled.div`
	max-width: 200px;
`

const CTAwrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	paddnig-top: 2em;
`

const ReadBlog = () => {
	return (
		<StaticQuery
			query={graphql`
				query ReadBlogImage {
					contentfulAsset(title: { eq: "readBlogImage" }) {
						fluid(maxWidth: 1000) {
							...GatsbyContentfulFluid
						}
					}
				}
			`}
			render={data => (
				<BackgroundColor
					color={colors.almostWhite}
					style={{ padding: `${paddingDefaults.topBottom} 0em` }}
				>
					<ReadBlogWrapper>
						<div>
							<HeaderSubheader
								header="The Ecze Hub"
								subheader={`"Here at ECZE, we look at the bigger picture as to why you’re suffering with eczema, provide holistic solutions for you to explore and develop useful ways to better manage your eczema.
																We believe that eczema is best managed holistically. We believe that what you eat, what you wear, what you think and feel all has a significant impact on your eczema.
																The Ecze Hub is a place for you to discover relief for your itchy skin with our recipes, exercises, lifestyle tips and valuable eczema info specifically designed to help people suffering with eczema."`}
							/>
						</div>
						<div>
							<IconSectionWrapper>
								<IndividualIconWrapper>
									<Icon src={Fitness} alt="ECZE Logo" />
									<CenteredBodyText>Exercise</CenteredBodyText>
								</IndividualIconWrapper>
								<IndividualIconWrapper>
									<Icon src={Lifestyle} alt="ECZE Logo" />
									<CenteredBodyText>Lifestyle</CenteredBodyText>
								</IndividualIconWrapper>
								<IndividualIconWrapper>
									<Icon src={Diet} alt="ECZE Logo" />
									<CenteredBodyText>Diet</CenteredBodyText>
								</IndividualIconWrapper>

								<IndividualIconWrapper>
									<Icon src={Mentalhealth} alt="ECZE Logo" />
									<CenteredBodyText>Mental Health</CenteredBodyText>
								</IndividualIconWrapper>
							</IconSectionWrapper>
						</div>

						<CTAwrapper>
							<CTAButton cta="Get onto the Ecze Hub" link="hub" />
						</CTAwrapper>
					</ReadBlogWrapper>
				</BackgroundColor>
			)}
		/>
	)
}

export default ReadBlog
