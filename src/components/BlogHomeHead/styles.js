import styled from "styled-components";
import MastheadBackground from "../../images/masthead_tfw.png";

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  .blog-description {
    color: #9A9A9A;
    line-height: 30px;
    font-family: $font-sans-serif;
    margin-bottom: 1em;
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: 700px;
  width: 100%;
  z-index: 1;
`;

export const Header = styled.div`
  position: relative;
  z-index: 1;
`;

export const Background = styled.div`
  position: absolute;
  bottom: 4em;
  right: 0px;
  width: 100%;
  height: 100%;
  background: url(${MastheadBackground}) bottom right no-repeat;
`;
