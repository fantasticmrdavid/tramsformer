import styled, { css, keyframes } from "styled-components";

const moveSweepLeft = keyframes`
  0% {
    left: 50%;
  }
  100% {
    left: -100%;
  }
`;

const moveSweepRight = keyframes`
  0% {
    right: 50%;
  }
  100% {
    right: -100%;
  }
`;

export const Revealer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const Sweep = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
  rgba(255, 255, 255, 0) 0%,
  rgba(255, 255, 255, 0) 45%,
  rgba(66, 224, 82, 0.2) 50%,
  rgba(255, 255, 255, 0) 55%,
  rgba(255, 255, 255, 0) 100%);
`;

export const SweepLeft = styled(Sweep)`
  animation: ${css`${moveSweepLeft} 1s linear 1`};
  animation-fill-mode: forwards;
`;

export const SweepRight = styled(Sweep)`
  animation: ${css`${moveSweepRight} 1s linear 1`};
  animation-fill-mode: forwards;
`;
