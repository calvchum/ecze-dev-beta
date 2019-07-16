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
  // height: 100%;
  // width: 100%;
`;

const ResponsiveNav = ({ style }) => {
  return (
    <ResponsiveNavStyles style={style}>
        <Navigation />
    </ResponsiveNavStyles>
  );
};

export default ResponsiveNav;
