import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import { Underline } from "../components/Underline"
import { HeaderText, BodyText, SubheaderText, colors, lineWidths, BackgroundColor, media } from "../utilities"

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
	& img {
		width: 100%;
		height: auto;
		margin-bottom: 0;
	}
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
					allContentfulAsset {
						edges {
							node {
								file {
									url
								}
							}
						}
					}

					allContentfulAboutPage {
						edges {
							node {
								section1 {
									childMarkdownRemark {
										html
									}
								}
								accentQuote1
								section2 {
									childMarkdownRemark {
										html
									}
								}
								section3 {
									childMarkdownRemark {
										html
									}
								}
								section4 {
									childMarkdownRemark {
										html
									}
								}
								accentQuote2
								section5 {
									childMarkdownRemark {
										html
									}
								}
							}
						}
					}
				}
			`}
			render={data => (
				<>
					<BackgroundColor color={colors.almostWhite}>
						<Layout>
							{console.log(data.allContentfulAsset.edges[0].node.file.url)}
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
												data.allContentfulAboutPage.edges[0].node.section1
													.childMarkdownRemark.html,
										}}
									/>
									<AboutImage>
										<img src={family} alt="" />
									</AboutImage>
								</SectionWrapper>

								{/* ######### ACCENT AQUOTE  */}
								<AccentWrapper>
									<SubheaderText
										dangerouslySetInnerHTML={{
											__html:
												data.allContentfulAboutPage.edges[0].node.accentQuote1,
										}}
									/>
								</AccentWrapper>

								<SectionWrapper>
									<AboutImage>
										<img src={family} alt="" />
									</AboutImage>
									<BodyText
										dangerouslySetInnerHTML={{
											__html:
												data.allContentfulAboutPage.edges[0].node.section2
													.childMarkdownRemark.html,
										}}
									/>
								</SectionWrapper>

								<SectionWrapper>
									<BodyText
										dangerouslySetInnerHTML={{
											__html:
												data.allContentfulAboutPage.edges[0].node.section3
													.childMarkdownRemark.html,
										}}
									/>
									<AboutImage>
										<img src={family} alt="" />
									</AboutImage>
								</SectionWrapper>

								<SectionWrapper>
									<AboutImage>
										<img src={family} alt="" />
									</AboutImage>
									<BodyText
										dangerouslySetInnerHTML={{
											__html:
												data.allContentfulAboutPage.edges[0].node.section4
													.childMarkdownRemark.html,
										}}
									/>
								</SectionWrapper>
								{/* ######### ACCENT AQUOTE  */}
								<AccentWrapper>
									<SubheaderText
										dangerouslySetInnerHTML={{
											__html:
												data.allContentfulAboutPage.edges[0].node.accentQuote2,
										}}
									/>
								</AccentWrapper>

								<SectionWrapper>
									<BodyText
										dangerouslySetInnerHTML={{
											__html:
												data.allContentfulAboutPage.edges[0].node.section5
													.childMarkdownRemark.html,
										}}
									/>
									<AboutImage>
										<img src={family} alt="" />
									</AboutImage>
								</SectionWrapper>
							</AboutContentWrapper>
						</Layout>
					</BackgroundColor>
				</>
			)}
		/>
)


export default About
