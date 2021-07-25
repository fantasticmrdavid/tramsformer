import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animations";
import { media } from "../../styles/utils";
import MastheadBackground from "../../images/masthead_tfw.png";

export const Background = styled.div`
  position: absolute;
  top: -2em;
  left: 0;
  width: 100%;
  height: 215px;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;

  .blog-description {
    color: #9A9A9A;
    line-height: 30px;
    font-size: 15px;
    margin-bottom: 1em;

    ${media.small`
      font-size: 16px;
  `}
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxContentWidth);
  width: 100%;
  z-index: 1;
  padding: 0 1em;
  text-align: center;

  ${media.small`
    padding: 0;
    text-align: left;
  `}
`;

export const Header = styled.div`
  position: relative;
  z-index: 1;
`;

export const HeroImage = styled.div`
  position: absolute;
  top: -9em;
  right: 0px;
  width: 100%;
  height: 100%;
  background: url(${MastheadBackground}) bottom right no-repeat;
  animation: ${css`${fadeIn} 1s ease 1`};
  animation-fill-mode: forwards;
  display: none;

  ${media.small`
    display: block;
  `}
`;
