import styled, { css } from "styled-components";
import { fadeIn } from "styles/animations";
import { media } from "styles/utils";

export const Background = styled.div`
  position: absolute;
  top: -2em;
  left: 0;
  width: 100%;
  height: 215px;
  overflow: hidden;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  svg {
    animation: ${css`${fadeIn} 1s ease 1`};
    animation-fill-mode: forwards;
    fill: rgba(0, 0, 0, 0.35);
    
    path {
      opacity: 0.1;
    }
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  text-shadow: -2px -2px 0 #FFF, 2px -2px 0 #FFF, -2px 2px 0 #FFF, 2px 2px 0 #FFF;

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
  top: -8em;
  right: 0px;
  width: 100%;
  height: 100%;
  background: ${(props) => `url(${props.src}) bottom right no-repeat`};
  animation: ${css`${fadeIn} 1s ease 1`};
  animation-fill-mode: forwards;
  display: none;

  ${media.small`
    display: block;
  `}
`;
