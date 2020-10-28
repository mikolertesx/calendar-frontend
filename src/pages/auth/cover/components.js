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
