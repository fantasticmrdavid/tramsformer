import styled, { css } from "styled-components";
import { fadeIn } from "../../styles/animations";

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.9rem;
  padding: 0.5em 0;
  color: #9A9A9A;
  font-weight: 700;
  animation: ${css`${fadeIn} 1s ease 1`};
  animation-fill-mode: forwards;
`;

export const Edition = styled.div`
  font-weight: 400;
  margin-left: 0.5em;
`;

export const Indicator = styled.span`
  height: 1rem;
  width: 1rem;
  background-color: #67dc66;
  border-radius: 50%;
  margin-right: 0.5em;
`;
