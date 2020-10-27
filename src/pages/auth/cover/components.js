import Div100Vh from "react-div-100vh";
import styled from "styled-components";
import Colors from "../../../constants/colors";

export const ParentDiv = styled(Div100Vh)`
  position: absolute;
  width: 100%;
  transition: transform 1s;

  &.hide {
    transform: translateY(-100%);
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
  background: ${Colors.coverBackground};
  display: flex;
  flex-direction: column;
`;

export const LogoContent = styled.div`
  color: white;
  width: 100%;
  position: relative;
  margin: auto;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoTitle = styled.div`
  position: absolute;
  background: ${Colors.coverTitle};
  font-family: "Sans-serif";
  font-size: 3rem;
  border-radius: 5px;
  padding: 4px 26px;
  transform: rotate(-45deg);
  color: ${Colors.tabBackground};
`;

export const SmallPart = styled.span`
  font-size: 0.9em;
  font-weight: 200;
  font-family: "Open Sans";
`;

export const BigPart = styled.span`
  font-size: 1em;
  font-weight: 400;
  font-family: "Open Sans";
`;