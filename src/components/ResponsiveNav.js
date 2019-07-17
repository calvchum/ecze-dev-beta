import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import Navigation from './Navigation';
import { colors } from '../utilities';

const ResponsiveNavStyles = styled(animated.div)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background: ${colors.almostWhite};
  font-size: 2em;
  padding: 10vh 0em 0em 1em;

  & > li {
    padding: 0.5em 0em;
  }
`;

const ResponsiveNav = ({ style }) => {
  return (
    <ResponsiveNavStyles style={style}>
        <Navigation />
    </ResponsiveNavStyles>
  );
};

export default ResponsiveNav;