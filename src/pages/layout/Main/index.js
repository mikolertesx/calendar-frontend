import React from "react";
import styled from "styled-components";

import Sizes from "../../../constants/sizes";
import MediaQueries from "../../../constants/mediaQueries";

const Div = styled.div`
  height: 100%;
  padding-left: ${Sizes.mobileSideBar};

  ${MediaQueries.isDesktop} {
    padding-left: 0;
    padding-top: ${Sizes.mobileSideBar};
  }
`;

const Main = ({ children }) => <Div>{children}</Div>;

export default Main;
