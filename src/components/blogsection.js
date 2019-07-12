import React, { Component } from "react"
import ArticlePreview from "./articlepreview"
import { Underline } from "./Underline"
import styled from "styled-components"
import { SubheaderText, lineWidths, colors } from "../utilities"

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 8px;
  max-width: 934px;
  padding-bottom: 3em;
`
const GridSectionTitleWrapper = styled.div`
  padding: 0em 0em 1em 0em;
`

/* eslint-disable */
class BlogSection extends Component {
  render() {
    // postLimit is the max amount of post displayed per section. it is a prop passed from the parent component, default if null is practically   no limit
    const postLimit = this.props.postLimit || 999
    console.log(`${this.props.category} blogsection`, this.props.posts)
    // the 'See More...' button only renders if the seeMore prop is explicitly specified as true
    const seeMoreButton = (
      <button
        onClick={() =>
          this.props.handleSeeMore(this.props.category, this.props.index)
        }
      >
        See more...
      </button>
    )

    return (
      <div>
        <GridSectionTitleWrapper>
          <SubheaderText>
            <Underline size={lineWidths.ctaUnderline} color={colors.secondary}>
              {this.props.title}
            </Underline>
          </SubheaderText>
        </GridSectionTitleWrapper>
        <ArticleGrid>
          {this.props.posts.slice(0, postLimit).map((post, i) => {
            return <ArticlePreview post={post} key={i} />
          })}
        </ArticleGrid>
        {this.props.seeMore && this.props.posts.length >= postLimit
          ? seeMoreButton
          : null}
      </div>
    )
  }
}

export default BlogSection
