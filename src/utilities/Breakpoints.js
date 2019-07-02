import { css } from 'styled-components';

// DEVICE SIZES
const size = {
  small: 400,
  med: 760,
  large: 1140
}

// CREATES THE CSS STRUCTURE FOR MEDIA QUERIES
export const media = Object.keys(size).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${size[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
