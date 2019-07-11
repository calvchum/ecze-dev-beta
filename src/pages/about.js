import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"
import { Underline } from "../components/Underline"
import { HeaderText, BodyText, SubheaderText, colors, lineWidths, BackgroundColor, paddingDefaults } from '../utilities'

// PLACEHOLDER IMAGES
import baby from "../assets/placeholders/baby.svg"
import clearAir from "../assets/placeholders/clear-air.svg"
import family from "../assets/placeholders/family.svg"
import winter from "../assets/placeholders/winter.svg"

const AboutContentWrapper = styled.div`
	display: grid;
	grid-template-rows: 1fr;
	padding: 0em;
	max-width: 960px;
	margin: 0 auto;
`;

const SectionWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	padding: 2em 0em;
	grid-gap: 1em;
`;

const AboutImage = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-start;
	height: 100%;
	margin-bottom: 0em;
	background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  & img {
  	max-width: 100%; 
  	height: auto; 
  }
`;

const AboutHeaderWrapper = styled.div`
		padding-top: 3em;
`;

const AccentWrapper = styled.div`
		max-width: 960px;
		background: white;
		padding: 3em;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.25);
`;



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
								<HeaderText><Underline size={lineWidths.ctaUnderline} color={colors.primary}>Our story</Underline></HeaderText>	
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
									<img src={baby} alt=""/>	
								</AboutImage>
							</SectionWrapper>

					{/* ######### ACCENT AQUOTE  */} 
							<AccentWrapper>
								<SubheaderText
									dangerouslySetInnerHTML={{
										__html: data.allContentfulAboutPage.edges[0].node.accentQuote1,
									}}
								/>
							</AccentWrapper>

							<SectionWrapper>
								<AboutImage>
									<img src={clearAir} alt=""/>
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
									<img src={baby} alt=""/>	
								</AboutImage>
							</SectionWrapper>

							<SectionWrapper>
								<AboutImage>
									<img src={family} alt=""/>	
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
										__html: data.allContentfulAboutPage.edges[0].node.accentQuote2,
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
									<img src={winter} alt=""/>	
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
