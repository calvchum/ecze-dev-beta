import styled from "styled-components"
import { media } from "../utilities"

export const BlogFilterWrapper = styled.div`
	display: grid;
	grid-template-columns: 250px 1fr;
	max-width: 1200px;
	margin: 0 auto;

	${media.med`
		grid-template-columns: 3fr;
		padding: 1em;
	`}
`

export const BlogHeaderWrapper = styled.div`
	padding: 3em 0em 3em 250px;
	margin: 0 auto;
	max-width: 1200px;

	${media.med`
		padding: 1em;
	`}
`

export const BlogHeader = styled.div``

export const PaddingBottom = styled.div`
	padding-bottom: 1em;
`

export const DisplayNone = styled.div`
	display: inline-block;

	${media.med`
		display: none;
	`}
`

export const ResponsiveFilterWrapper = styled.div`
	display: none;
	${media.med`
		display: block;
	`}
`
