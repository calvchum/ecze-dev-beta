import React from "react"
import styled from "styled-components"
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

const ReadBlog = () => (
	<BackgroundColor color={colors.almostWhite}>
		<ReadBlogWrapper>
			<LeftSide>
				<img src={baby} alt="a baby" />
			</LeftSide>
			<RightSide>
				<BodyText>
					Come discover the root cause of your eczema flare ups and start your
					journey towards a happier, healthier, itch-free life.
				</BodyText>
				<CTAButton cta="Read the blog" link="blog" />
			</RightSide>
		</ReadBlogWrapper>
	</BackgroundColor>
)

export default ReadBlog
