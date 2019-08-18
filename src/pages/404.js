import React from "react"
import { Link } from "gatsby-plugin-modal-routing"
import ReactModal from "react-modal"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import { HeaderText, BodyText, NavLinksFont } from '../utilities'

const Wrapper = styled.div`
	max-width: 500px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const NotFoundPage = props => (
	<Layout props={props}>
		<SEO title="404: Not found" />
		<Wrapper>
			<HeaderText>Ahh, this page doesn't actually exist..</HeaderText>
			<BodyText>This is our goal for Eczema</BodyText>
			<Link style={NavLinksFont} to="/">Home</Link>
		</Wrapper>
	</Layout>
)

export default NotFoundPage
