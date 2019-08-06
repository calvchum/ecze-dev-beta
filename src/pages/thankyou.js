import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { HeaderText, BodyText, media } from "../utilities"
import { CTAButton } from "../components/Buttons"

const ThankYouWrapper = styled.div`
	max-width: 960px;
	margin: 0 auto;
	padding: 4em 0em;
	${media.med`
		padding: 4em 1em;
	`}
`

const ThankYouPage = props => (
	<Layout props={props}>
		<SEO title="Subscription success!" />
		<ThankYouWrapper>
			<HeaderText>Thanks for subscribing to ECZE!</HeaderText>
			<BodyText>
				Thank you for signing up! We promise you won't regret it.
			</BodyText>
			<CTAButton cta="Back to the blog" link="blog" />
		</ThankYouWrapper>
	</Layout>
)

export default ThankYouPage
