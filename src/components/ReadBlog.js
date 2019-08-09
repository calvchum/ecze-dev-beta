import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"
import {
	colors,
	BodyText,
	paddingDefaults,
	media,
	BackgroundColor,
	lineWidths,
} from "../utilities"
import { CTAButton } from "./Buttons"
import baby from "../assets/placeholders/baby.svg"
import { CenteredHeaderText } from "./KillerPoints"
import { Underline } from "./Underline"
import { useSpring, animated } from "react-spring"
import holistic from "../assets/bt-icons/holistic.svg"
import community from "../assets/bt-icons/community.svg"
import excited from "../assets/bt-icons/excited.svg"
import HeaderSubheader from "./HeaderSubheader"

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
								header="Get the tools and support you need to best manage your eczema."
								subheader="Discover relief for your itchy skin with our recipes, exercises, lifestyle tips and valuable eczema info specifically designed to help people suffering with eczema."
							/>
						</div>
						<div>
							<IconSectionWrapper>
								<IndividualIconWrapper>
									<Icon src={holistic} alt="ECZE Logo" />
									<CenteredBodyText>Exercise</CenteredBodyText>
								</IndividualIconWrapper>
								<IndividualIconWrapper>
									<Icon src={community} alt="ECZE Logo" />
									<CenteredBodyText>Lifestyle</CenteredBodyText>
								</IndividualIconWrapper>
								<IndividualIconWrapper>
									<Icon src={excited} alt="ECZE Logo" />
									<CenteredBodyText>Diet</CenteredBodyText>
								</IndividualIconWrapper>

								<IndividualIconWrapper>
									<Icon src={holistic} alt="ECZE Logo" />
									<CenteredBodyText>Mental Health</CenteredBodyText>
								</IndividualIconWrapper>
							</IconSectionWrapper>
						</div>

						<CTAwrapper>
							<CTAButton cta="Get onto the Ecze Hub" link="blog" />
						</CTAwrapper>
					</ReadBlogWrapper>
				</BackgroundColor>
			)}
		/>
	)
}

export default ReadBlog
