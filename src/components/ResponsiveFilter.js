import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"
import FilterBlog from "./filterblog"
import { media, colors, SubheaderText, BodyText } from "../utilities"

const ResponsiveFilterStyles = styled(animated.div)`
  width: 100vw;
  height: 100vh;
  z-index: 19;
  background: ${colors.almostWhite};
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding-top: 20vh;

`

const FilterButtonStyle = styled(animated.div)`
  display: none;

  ${media.med`
    display: flex;
    align-items: center;
    justify-content: center;    
    background: ${colors.almostBlack};
    color: ${colors.almostWhite};
    height: 60px
    position: fixed;
    bottom:0;
    left: 0;
    right: 0;
    z-index: 20;
    transition: 0.2s;
  `}
`
const FilterClose = styled.div`
  position: fixed;
  top: 1em;
  right: 1em;
  width: 64px;
  height 40px;
  cursor: pointer;
  // color: ${colors.almostBlack};
  text-decoration: underline;
  display: flex;
  align-items: center;
  justify-content: center;
`


export const ResponsiveFilter = ({
  cta,
  categories,
  updateSelectedCategories,
}) => {
  const [isFilterOpen, setFilterOpen] = useState(false)
  const filterAnimation = useSpring({
    transform: isFilterOpen ? `translateY(0%)` : `translateY(-100%)`,
    opacity: isFilterOpen ? `1` : `0`
  })
  const filterButtonAnimation = useSpring({
    background: isFilterOpen ? `${colors.primary}` : `${colors.almostBlack}`
  })

  return (
    <>
      <FilterButtonStyle style={filterButtonAnimation} onClick={() => setFilterOpen(!isFilterOpen)}>
        { isFilterOpen ? 'Save' : 'Filter' }
      </FilterButtonStyle>
      <ResponsiveFilterStyles style={filterAnimation}>
        <FilterClose onClick={() => setFilterOpen(!isFilterOpen)}>
          <SubheaderText>Close</SubheaderText>
        </FilterClose>
        <SubheaderText>
          <FilterBlog
            categories={categories}
            updateSelectedCategories={updateSelectedCategories}
          />
          
        </SubheaderText>
      </ResponsiveFilterStyles>
    </>
  )
}
