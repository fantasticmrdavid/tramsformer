import { css } from "styled-components";

const widthSizes = {
  small: 568,
  medium: 768,
  large: 1000,
  xlarge: 1600,
};

export const media = Object.keys(widthSizes).reduce(
  (accumulator, label) => {
    /* eslint-disable */
    accumulator[label] = (literals, ...args) => css`
    @media (min-width: ${widthSizes[label] / 16}em) {
      ${css(literals, ...args)}
    }`;
    /* eslint-enable */
    return accumulator;
  }, {
    hover: (literals, ...args) => css`
    @media (hover: hover) {
      ${css(literals, ...args)}
    }`,
  },
);
