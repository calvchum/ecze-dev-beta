import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

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
				<Layout>
					{console.log(data.allContentfulAsset.edges[0].node.file.url)}
					<SEO title="About" />
					<div>
						<h1>Our story</h1>

						<div
							dangerouslySetInnerHTML={{
								__html:
									data.allContentfulAboutPage.edges[0].node.section1
										.childMarkdownRemark.html,
							}}
						/>
						<div
							dangerouslySetInnerHTML={{
								__html: data.allContentfulAboutPage.edges[0].node.accentQuote1,
							}}
						/>

						<div
							dangerouslySetInnerHTML={{
								__html:
									data.allContentfulAboutPage.edges[0].node.section2
										.childMarkdownRemark.html,
							}}
						/>
						<div
							dangerouslySetInnerHTML={{
								__html:
									data.allContentfulAboutPage.edges[0].node.section3
										.childMarkdownRemark.html,
							}}
						/>
						<div
							dangerouslySetInnerHTML={{
								__html:
									data.allContentfulAboutPage.edges[0].node.section4
										.childMarkdownRemark.html,
							}}
						/>
						<div
							dangerouslySetInnerHTML={{
								__html: data.allContentfulAboutPage.edges[0].node.accentQuote2,
							}}
						/>
						<div
							dangerouslySetInnerHTML={{
								__html:
									data.allContentfulAboutPage.edges[0].node.section5
										.childMarkdownRemark.html,
							}}
						/>
					</div>
				</Layout>
			</>
		)}
	/>
)

export default About
