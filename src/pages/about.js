import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Layout from "../components/layout"

const About = () => (
	<StaticQuery
		query={graphql`
			query AboutPageQuery {
				allContentfulFaQs {
					edges {
						node {
							question
							answer {
								answer
							}
						}
					}
				}
			}
		`}
		render={data => (
			<>
				<Layout>
					<div>
						<h1>About page</h1>
						<p>
							this is where the about information goes. It will be made as a
							stateless component. Use the Faq page as a reference
						</p>
					</div>
				</Layout>
			</>
		)}
	/>
)

export default About
