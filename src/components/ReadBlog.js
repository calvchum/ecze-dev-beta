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
import { useInView } from "react-intersection-observer"
import { useSpring, animated } from "react-spring"

const ReadBlogWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, auto));
	max-width: 720px;
	margin: 0 auto;
`

const LeftSide = styled.div`
	margin-bottom: 0px;
	padding-right: 1em;
	${media.med`
		padding-right: 0em;
		padding-bottom: 1em;
		max-height: 100%;
		max-width: 100%;
	`}
`

const RightSide = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;

	& p:first-child {
		padding-bottom: 2em;
	}

	& button {
		margin: 0px;
	}
`

const ReadBlog = () => {
	const [ref, inView] = useInView({
		threshold: 0.25,
	})
	const props = useSpring({ opacity: inView ? 1 : 0 })

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
				<animated.div ref={ref} style={props}>
					<BackgroundColor
						color={colors.almostWhite}
						style={{ padding: `${paddingDefaults.topBottom} 1em` }}
					>
						<CenteredHeaderText>
							<Underline
								size={lineWidths.ctaUnderline}
								color={colors.secondary}
							>
								The Ecze Hub
							</Underline>
						</CenteredHeaderText>
						<ReadBlogWrapper>
							<LeftSide>
								<Img fluid={data.contentfulAsset.fluid} />
							</LeftSide>
							<RightSide>
								<BodyText>
									Come discover the root cause of your eczema flare ups and
									start your journey towards a happier, healthier, itch-free
									life.
								</BodyText>
								<CTAButton cta="Checkout the Hub" link="blog" />
							</RightSide>
						</ReadBlogWrapper>
					</BackgroundColor>
				</animated.div>
			)}
		/>
	)
}

export default ReadBlog
