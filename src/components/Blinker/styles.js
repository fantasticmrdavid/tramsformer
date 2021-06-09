import styled, { css } from "styled-components";
import { blink } from "styles/animations";
import theme from "styles/theme";

export const Cursor = styled.div`
  position: relative;
  display: inline-block;
  width: 0.5rem;
  margin-left: 0.15rem;
  animation: ${css`${blink} 1s step-end infinite`};
  border-bottom: ${(props) => `2px solid ${props.color ? props.color : theme.colorTextPrimary}`};
`;
