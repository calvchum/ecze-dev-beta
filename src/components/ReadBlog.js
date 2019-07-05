import React from "react"
import styled from "styled-components"
import { colors, BodyText, paddingDefaults } from '../utilities'
import { CTAButton } from './Buttons'

const ReadBlogWrapper = styled.div`

`;

const ReadBlog = () => (
	<ReadBlogWrapper>
		<img src="" alt=""/>
		<BodyText></BodyText>
		<CTAButton cta="Read the blog" />
	</ReadBlogWrapper>
)

export default ReadBlog;
