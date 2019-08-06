import React from 'react';
import styled from 'styled-components';
import { animated } from 'react-spring';
import Navigation from './Navigation';
import { colors } from '../utilities';
import SocialMediaIcons from './SocialMedia'

const ResponsiveNavStyles = styled(animated.div)`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background: ${colors.almostWhite};
  font-size: 2em;
  padding: 12vh 0em 0em 0em;
  display: flex;
  align-items: center;
  flex-direction: column;  

  & > li {
    padding: 0.5em 0em;
  }
`;

const ResponsiveNav = ({ style }) => {
  return (
    <ResponsiveNavStyles style={style}>
        <Navigation />
        <SocialMediaIcons />
    </ResponsiveNavStyles>
  );
};

export default ResponsiveNav;
