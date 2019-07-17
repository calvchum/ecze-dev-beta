import React, { useState } from "react"
import { useSpring, animated } from 'react-spring'; 
import styled from 'styled-components';
import FilterBlog from './FilterBlog';
import { media } from '../utilities';

const ResponsiveFilterStyles = styled(animated.div)`
  width: 100vw;
  background: white;
`;

const FilterButtonStyle = styled.button`
  display: none;

  ${media.med`
    display: block;
  `}

  background: white;
  width: 100vw;
  height: 44px;
  position: sticky;
  z-index: 20;
  top: 0;
  left: 0;
  border: none;
  transition: 0.2s;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  &:focus {
    outline: none;
  }
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const ResponsiveFilter = ({ cta, categories, updateSelectedCategories}) => {
  const [isFilterOpen, setFilterOpen] = useState(false);
  const filterAnimation = useSpring({
    height: isFilterOpen ? `400px` : `0px`,
    transform: isFilterOpen ? `translateY(0%)` : `translateY(-100%)`,
    display:  isFilterOpen ? `block` : `none`
  });

  return (
    <>
      <FilterButtonStyle onClick={() => setFilterOpen(!isFilterOpen)}>{cta}</FilterButtonStyle>
      <ResponsiveFilterStyles style={filterAnimation}>
        <FilterBlog
          categories={categories}
          updateSelectedCategories={updateSelectedCategories}
        />
      </ResponsiveFilterStyles>
    </>
  );
};


