import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import { Underline } from "../components/Underline"
import {
	HeaderText,
	BodyText,
	SubheaderText,
	colors,
	lineWidths,
	BackgroundColor,
	media,
} from "../utilities"

// PLACEHOLDER IMAGES
import family from "../assets/placeholders/family.svg"

const AboutContentWrapper = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	padding: 0em;
	max-width: 960px;
	margin: 0 auto;

	${media.med`
		padding: 0em 1em;
	`}
`

const SectionWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 2em 0em;
	grid-gap: 1em;

	${media.med`
		grid-template-columns: 1fr;
	`}
`

const AboutImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	height: 100%;
	width: 100%;
	margin-bottom: 0em;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 50% 50%;
`

const AboutHeaderWrapper = styled.div`
	padding-top: 3em;
`

const AccentWrapper = styled.div`
	max-width: 960px;
	background: white;
	padding: 3em;
	box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
	${media.med`
		padding: 2em;
	`}
`
const About = () => (
	<StaticQuery
		query={graphql`
			query AboutPageQuery {
				contentfulAsset(title: { eq: "readBlogImage" }) {
					description
					fluid(maxWidth: 1000) {
						...GatsbyContentfulFluid
					}
				}
				contentfulAboutPage(
					id: { eq: "c53ad837-16d2-51ef-a8bc-07ec40db721f" }
				) {
					section1 {
						childMarkdownRemark {
							html
						}
					}
					sectionImage1 {
						description
						fluid(maxWidth: 1000) {
							...GatsbyContentfulFluid
						}
					}
					accentQuote1
					section2 {
						childMarkdownRemark {
							html
						}
					}
					sectionImage2 {
						description
						fluid(maxWidth: 1000) {
							...GatsbyContentfulFluid
						}
					}
					section3 {
						childMarkdownRemark {
							html
						}
					}
					sectionImage3 {
						description
						fluid(maxWidth: 1000) {
							...GatsbyContentfulFluid
						}
					}
					section4 {
						childMarkdownRemark {
							html
						}
					}
					sectionImage4 {
						description
						fluid(maxWidth: 1000) {
							...GatsbyContentfulFluid
						}
					}
					accentQuote2
					section5 {
						childMarkdownRemark {
							html
						}
					}
					sectionImage5 {
						description
						fluid(maxWidth: 1000) {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		`}
		render={data => (
			<>
				<BackgroundColor color={colors.almostWhite}>
					<Layout>
						<SEO title="About" />

						<AboutContentWrapper>
							<AboutHeaderWrapper>
								<HeaderText>
									<Underline
										size={lineWidths.ctaUnderline}
										color={colors.primary}
									>
										Our story
									</Underline>
								</HeaderText>
							</AboutHeaderWrapper>
							<SectionWrapper>
								<BodyText
									dangerouslySetInnerHTML={{
										__html:
											data.contentfulAboutPage.section1.childMarkdownRemark
												.html,
									}}
								/>

								<Img fluid={data.contentfulAboutPage.sectionImage1.fluid} />
								<p>{data.contentfulAboutPage.sectionImage1.description}</p>
							</SectionWrapper>

							{/* ######### ACCENT AQUOTE  */}
							<AccentWrapper>
								<SubheaderText
									dangerouslySetInnerHTML={{
										__html: data.contentfulAboutPage.accentQuote1,
									}}
								/>
							</AccentWrapper>
							<SectionWrapper>
								<Img fluid={data.contentfulAboutPage.sectionImage2.fluid} />
								<p>{data.contentfulAboutPage.sectionImage2.description}</p>
								<BodyText
									dangerouslySetInnerHTML={{
										__html:
											data.contentfulAboutPage.section2.childMarkdownRemark
												.html,
									}}
								/>
							</SectionWrapper>

							<SectionWrapper>
								<BodyText
									dangerouslySetInnerHTML={{
										__html:
											data.contentfulAboutPage.section3.childMarkdownRemark
												.html,
									}}
								/>

								<Img fluid={data.contentfulAboutPage.sectionImage3.fluid} />
								<p>{data.contentfulAboutPage.sectionImage3.description}</p>
							</SectionWrapper>

							<SectionWrapper>
								<Img fluid={data.contentfulAboutPage.sectionImage4.fluid} />
								<p>{data.contentfulAboutPage.sectionImage4.description}</p>
								<BodyText
									dangerouslySetInnerHTML={{
										__html:
											data.contentfulAboutPage.section4.childMarkdownRemark
												.html,
									}}
								/>
							</SectionWrapper>
							{/* ######### ACCENT AQUOTE  */}
							<AccentWrapper>
								<SubheaderText
									dangerouslySetInnerHTML={{
										__html: data.contentfulAboutPage.accentQuote2,
									}}
								/>
							</AccentWrapper>

							<SectionWrapper>
								<BodyText
									dangerouslySetInnerHTML={{
										__html:
											data.contentfulAboutPage.section5.childMarkdownRemark
												.html,
									}}
								/>
								<Img fluid={data.contentfulAboutPage.sectionImage5.fluid} />
								<p>{data.contentfulAboutPage.sectionImage5.description}</p>
							</SectionWrapper>
						</AboutContentWrapper>
					</Layout>
				</BackgroundColor>
			</>
		)}
	/>
)

export default About
