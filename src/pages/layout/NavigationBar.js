import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { TabPages } from "../../constants/iconComponents";
import MediaQueries from "../../constants/mediaQueries";
import Colors from "../../constants/colors";
import Sizes from "../../constants/sizes";

const Div = styled.div`
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

const Flex = styled.div`
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

const IconDiv = styled.div`
  margin: 12px 0;
  width: calc(${Sizes.mobileSideBar} - 12px);
  height: calc(${Sizes.mobileSideBar} - 12px);
  border-radius: 5px;
  background: ${Colors.tabIconBackground};
  /* Center the element inside it. */
  display: flex;
  align-items: center;
  justify-content: center;

  ${MediaQueries.isDesktop} {
    padding: 8px 16px;
    width: auto;
    height: auto;
  }
`;

const NavigationBar = () => (
  <Div>
    <Flex>
      {TabPages.map((page) => (
        <NavLink
          to={page.url}
          key={page.key}
          exact={page.url === "/"}
          activeStyle={{
            transform: ["scale(1.1)"],
            transition: "transform 0.3s",
          }}
        >
          <IconDiv>{page.icons}</IconDiv>
        </NavLink>
      ))}
    </Flex>
  </Div>
);

export default NavigationBar;
