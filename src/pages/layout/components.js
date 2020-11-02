import styled from "styled-components";
import { NavLink } from "react-router-dom";
import MediaQueries from "../../constants/mediaQueries";
import Colors from "../../constants/colors";
import Sizes from "../../constants/sizes";

export const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: ${Sizes.mobileSideBar};
  background: ${Colors.tabBackground};

  ${MediaQueries.isDesktop} {
    height: ${Sizes.mobileSideBar};
    width: 100%;
  }
`;
export const Flex = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;

  ${MediaQueries.isDesktop} {
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const IconLink = styled(NavLink)`
  margin: 12px 0;
  width: calc(${Sizes.mobileSideBar} - 12px);
  height: calc(${Sizes.mobileSideBar} - 12px);
  border-radius: 5px;
  background: ${Colors.tabIconBackground};
  /* Center the element inside it. */
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s, color 1s;

  ${MediaQueries.isDesktop} {
    padding: 8px 16px;
    width: auto;
    height: auto;
  }

  &.active {
    color: ${Colors.tabIconBackground};
    background: white;
  }
`;
