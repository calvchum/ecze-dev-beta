import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { colors, SubheaderText, BodyText, media } from "../utilities"

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
    color: ${colors.almostBlack}
  }


  ${media.med`
    max-width: 160px;
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

const BlogImage = styled.img`
  position: relative;
  margin-bottom: 16px;
  float: left;
  width: 306px;
  height: 264px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  ${media.med`
    width: 220px;
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
    },
  },
}) => (
    <CardWrapper>
  <Link to={`/blog/${slug}`}>
      <BlogImage src={url} alt="blog post image" />
      <BodyTextUppercase>{category}</BodyTextUppercase>
      <BodyTextCapitalized>{title.toLowerCase()}</BodyTextCapitalized>
  </Link>
    </CardWrapper>
)
export default ArticlePreview
