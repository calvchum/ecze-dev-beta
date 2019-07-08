import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { colors, SubheaderText, BodyText } from '../utilities'

const CardWrapper = styled.div`
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  // border: 1px solid ${colors.almostWhite}
`;

const BodyTextUppercase = styled(BodyText)`
  text-transform: uppercase;
`;

const BodyTextCapitalized = styled(BodyText)`
  text-transform: capitalize;
  font-weight: 500;
`;

// Link cant be a styled component because it is GATSBY specific, using an object instead
const linkStyles = {
  textDecoration: 'none',
  color: colors.almostBlack,
  maxWidth: '306px',
  maxHeight: '406px'
}

const BlogImage = styled.img`
  position: relative;
    float: left;
    width:  306px;
    height: 264px;
    background-position: 50% 50%;
    background-repeat:   no-repeat;
    background-size:     cover;
`;



const ArticlePreview = ({
  post: {
    node: {
      slug,
      category,
      title,
      heroImage: {
        file: { url },
      },
    },
  },
}) => (
  <Link to={`/blog/${slug}`} style={linkStyles}>
    <CardWrapper>
      <BlogImage src={url} alt="blog post image" />
      <BodyTextUppercase>{category}</BodyTextUppercase>
      <BodyTextCapitalized>{title}</BodyTextCapitalized>
    </CardWrapper>
  </Link>
)
export default ArticlePreview
