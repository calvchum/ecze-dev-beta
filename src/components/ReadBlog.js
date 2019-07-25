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
} from "../utilities"
import { CTAButton } from "./Buttons"
import baby from "../assets/placeholders/baby.svg"

const ReadBlogWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	max-width: 960px;
	margin: 0 auto;
	padding: ${paddingDefaults.topBottom} 1em;

	${media.med`
		display: flex;
		flex-direction: column;
	`}
`

const LeftSide = styled.div`
	& img {
		width: 100%;
		height: 100%;
		margin-bottom: 0px;
		padding-right: 1em;

		${media.med`
			padding-right: 0em;
		`}
	}
`

const RightSide = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	max-height: 250px;

	& p:first-child {
		padding-bottom: 1em;
	}
`

// 1. add a static query to this component, upload image asset
// query to return that image
// 2. return a fluid image from contentful
// 3. import Img from gatsby-image, render in <LeftSide> img tag

const ReadBlog = () => (
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
			<>
				<BackgroundColor color={colors.almostWhite}>
					<ReadBlogWrapper>
						<LeftSide>
							<Img fluid={data.contentfulAsset.fluid} />
						</LeftSide>
						<RightSide>
							<BodyText>
								Come discover the root cause of your eczema flare ups and start
								your journey towards a happier, healthier, itch-free life.
							</BodyText>
							<CTAButton cta="Read the blog" link="blog" />
						</RightSide>
					</ReadBlogWrapper>
				</BackgroundColor>
			</>
		)}
	/>
)

export default ReadBlog
