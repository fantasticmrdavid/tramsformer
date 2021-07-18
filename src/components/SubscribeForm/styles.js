import styled from "styled-components";

export const BracketContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

export const BracketLeft = styled.div`
  position: absolute;
  top: -13px;
  left: -13px;
  width: 30px;
  height: 30px;
  border-top: 8px solid rgba(0, 0, 0, 0.1);
  border-left: 8px solid rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: 0.3s;
  
  &::after {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    width: 50px;
    height: 50px;
    border-top: 4px solid rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(0, 0, 0, 0.1);
  }
`;

export const BracketRight = styled.div`
  position: absolute;
  bottom: -13px;
  right: -13px;
  width: 30px;
  height: 30px;
  border-bottom: 8px solid rgba(0, 0, 0, 0.1);
  border-right: 8px solid rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: 0.3s;

  &::after {
    position: absolute;
    content: "";
    bottom: 0px;
    right: 0px;
    width: 50px;
    height: 50px;
    border-bottom: 4px solid rgba(0, 0, 0, 0.1);
    border-right: 4px solid rgba(0, 0, 0, 0.1); 
  }
`;

export const Container = styled.div`
  position: relative;
  background-color: #efefef;
  border: 1px solid #cdcdcd;
  padding: 1em;
  transition: 0.3s;

  &:hover,
  &:focus-within
  {
    background-color: #ffeccb;
    border-color: rgba(250, 173, 20, 0.4);

    & ${BracketLeft},
    & ${BracketRight},
    & ${BracketLeft}::after,
    & ${BracketRight}::after {
      opacity: 1;
      border-color: rgba(250, 173, 20, 0.4);
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
`;
