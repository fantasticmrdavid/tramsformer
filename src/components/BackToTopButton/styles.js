import styled from "styled-components";
import { media } from "../../styles/utils";

export const Container = styled.div`
  position: fixed;
  display: none;
  bottom: 0px;
  right: 2em;
  z-index: 3;

  ${media.small`
    display: block;
  `}
`;
