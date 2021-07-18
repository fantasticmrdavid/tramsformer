import styled from "styled-components";
import { media } from "../../styles/utils";

const textShadowColor = "rgba(255, 255, 255, 0.35)";
const textShadowColorOn = "rgba(255, 255, 255, 0.5)";

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
  transition: 0.3s;
  opacity: 0;
  
  &::after {
    position: absolute;
    content: "";
    top: 0px;
    left: 0px;
    width: 60px;
    height: 60px;
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
  transition: 0.3s;
  opacity: 0;

  &::after {
    position: absolute;
    content: "";
    bottom: 0px;
    right: 0px;
    width: 80px;
    height: 80px;
    border-bottom: 4px solid rgba(0, 0, 0, 0.1);
    border-right: 4px solid rgba(0, 0, 0, 0.1); 
  }
`;

export const BannerButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 1em;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.backgroundColorOff};
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.3s;
  width: 100%;
  text-shadow: -1px -1px 0 #FFF, 1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px 1px 0 #FFF;

  &:hover {
    opacity: 1;
    border-color: rgba(250, 173, 20, 0.4);
    background-color: ${(props) => props.backgroundColorOn};
    text-shadow: -1px -1px 0 ${textShadowColorOn}, 1px -1px 0 ${textShadowColorOn}, -1px 1px 0 ${textShadowColorOn}, 1px 1px 0 ${textShadowColorOn};

    & ${BracketLeft},
    & ${BracketRight},
    & ${BracketLeft}::after,
    & ${BracketRight}::after
    {
      opacity: 1;
      border-color: rgba(250, 173, 20, 0.4);
    }
  }

  ${media.small`
    text-shadow: -1px -1px 0 ${textShadowColor}, 1px -1px 0 ${textShadowColor}, -1px 1px 0 ${textShadowColor}, 1px 1px 0 ${textShadowColor};
  `}
`;

export const Title = styled.div`
  line-height: 1;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: 700;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  
  & a:last-of-type {
    ${BannerButton} {
      justify-content: flex-end;
      
      ${Title} {
        text-align: right;
      }

      & ${BracketContainer} {
        transform: scaleX(-1);
      }
    }
  }

  ${media.small`
    grid-template-columns: 1fr 1fr;
  `}
`;

export const TitleLarge = styled.div`
  font-size: 1.5rem;
`;
