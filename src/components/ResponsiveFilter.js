import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import styled from "styled-components"
import FilterBlog from "./filterblog"
import { media, colors, SubheaderText } from "../utilities"

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

const FilterButtonStyle = styled.div`
  display: none;

  ${media.med`
    display: flex;
    align-items: center;
    justify-content: center;    
    background: ${colors.almostBlack};
    color: ${colors.almostWhite};
    width: 60px;
    height: 60px;
    border-radius: 50%;
    position: fixed;
    bottom: 5%;
    right: 1em;
    z-index: 20;
    transition: 0.2s;
  `}
`

export const ResponsiveFilter = ({
  cta,
  categories,
  updateSelectedCategories,
}) => {
  const [isFilterOpen, setFilterOpen] = useState(false)
  const filterAnimation = useSpring({
    transform: isFilterOpen ? `translateY(0%)` : `translateY(-100%)`,
    opacity: isFilterOpen ? `0.95` : `0`
  })

  const filterButtonAnimation = useSpring({

  })

  return (
    <>
      <FilterButtonStyle onClick={() => setFilterOpen(!isFilterOpen)}>
        Filter
      </FilterButtonStyle>
      <ResponsiveFilterStyles style={filterAnimation}>
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
