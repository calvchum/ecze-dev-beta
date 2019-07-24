import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { colors, BodyText, media } from "../utilities"

// Link cant be a styled component because it is GATSBY specific, using an object instead

const CardWrapper = styled.div`
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  height: 406px;
  padding-bottom: 1em;
  transition: 0.3s;
  &:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  }

  & > a {
    text-decoration: none;
    color: ${colors.almostBlack};
  }

  & > a:hover {
    text-decoration: none;
    color: ${colors.almostBlack};
  }

  ${media.med`
    height: auto;
  `}
`

const BodyTextUppercase = styled(BodyText)`
  text-transform: uppercase;
  font-size: 14px;
  padding: 16px;
`

const BodyTextCapitalized = styled(BodyText)`
  text-transform: capitalize;
  font-weight: 500;
  padding: 0px 16px;
`

const BlogImage = styled(Img)`
  position: relative;
  margin-bottom: 16px;
  float: left;
  width: 100%;
  height: 264px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  ${media.small`
    width: 100%;
    height: 180px;
  `}
`

const ArticlePreview = ({
  post: {
    slug,
    category,
    title,
    heroImage: {
      file: { url },
      fluid,
    },
  },
}) => {
  return (
    <CardWrapper>
      <Link to={`/blog/${slug}`}>
        <BlogImage fluid={fluid} />
        <BodyTextUppercase>{category}</BodyTextUppercase>
        <BodyTextCapitalized>{title.toLowerCase()}</BodyTextCapitalized>
      </Link>
    </CardWrapper>
  )
}

export default ArticlePreview
