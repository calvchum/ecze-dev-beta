import React, { Component } from "react"
import ArticlePreview from "./articlepreview"
import { Underline } from "./Underline"
import styled from "styled-components"
import { SubheaderText, lineWidths, colors, media } from "../utilities"
import { Trail } from "react-spring/renderprops"
import { animated } from "react-spring"

const ArticleGrid = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 8px;
  max-width: 960px;
  padding-bottom: 3em;
  // padding-right: 1em
  ${media.med`
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    margin: 0 auto;
  `}
  ${media.small`
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    margin: 0 auto;
  `}
`
const GridSectionTitleWrapper = styled(animated.div)`
  padding: 0em 0em 1em 0em;
`

const SeeMoreWrapper = styled.div`
  & button {
    padding: 0.8em;
    background: ${colors.almostBlack};
    color: ${colors.almostWhite};
    &:focus {
      outline: none;
    }
  }
`

/* eslint-disable */
class BlogSection extends Component {
  render() {
    // postLimit is the max amount of post displayed per section. it is a prop passed from the parent component, default if null is practically   no limit
    const postLimit = this.props.postLimit || 999
    // the 'See More...' button only renders if the seeMore prop is explicitly specified as true
    const seeMoreButton = (
      <SeeMoreWrapper>
        <button
          onClick={() =>
            this.props.handleSeeMore(this.props.category, this.props.index)
          }
        >
          See more...
        </button>
      </SeeMoreWrapper>
    )

    return (
      <div>
        <Trail
          items="1"
          from={{ transform: "translate3d(0,800px,0)", opacity: 0 }}
          to={{ transform: "translate3d(0,0,0)", opacity: 1 }}
        >
          {item => ({ transform, opacity }) => (
            <animated.div style={{ transform, opacity }}>
              <GridSectionTitleWrapper>
                <SubheaderText style={{ fontWeight: 400, lineHeight: '180%' }}>
                  <Underline
                    size={lineWidths.ctaUnderline}
                    color={colors.secondary}
                    style={{ fontWeight: 500 }}
                  >
                    {this.props.title}
                   </Underline>
                  <span> </span>{this.props.subtitle ? this.props.subtitle : null}
                </SubheaderText>
              </GridSectionTitleWrapper>
            </animated.div>
          )}
        </Trail>

        <Trail
          items="1"
          from={{ transform: "translate3d(0,200px,0)", opacity: 0 }}
          to={{ transform: "translate3d(0,0,0)", opacity: 1 }}
        >
          {item => ({ transform, opacity }) => (
            <animated.div style={{ transform, opacity }}>
              <ArticleGrid>
                {this.props.posts.slice(0, postLimit).map((post, i) => {
                  return <ArticlePreview post={post} key={i} />
                })}
                {this.props.seeMore && this.props.posts.length >= postLimit
                  ? seeMoreButton
                  : null}
              </ArticleGrid>
            </animated.div>
          )}
        </Trail>
      </div>
    )
  }
}

export default BlogSection
