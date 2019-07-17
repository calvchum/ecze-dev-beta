import React from "react"
import styled from "styled-components"
import { colors, media } from "../utilities"
import FilterBlog from './FilterBlog'

export const BlogFilterWrapper = styled.div`
	display: grid;
	grid-template-columns: 250px 3fr;

	${media.med`
		grid-template-columns: 3fr;
		padding: 1em;
		margin: 0 auto;

	`}
`;

export const BlogHeaderWrapper = styled.div`
	padding: 3em 0em 3em 250px;

	${media.med`
		padding: 1em;

	`}
`;

export const BlogHeader = styled.div`
`;

export const PaddingBottom = styled.div`
	padding-bottom: 1em;
`;

export const DisplayNone = styled.div`
	display: inline-block;
	
	${media.med`
		display: none;
	`}
`;

export const ResponsiveFilterWrapper = styled.div`
	display: none;
	${media.med`
		display: block;
	`}
`;







