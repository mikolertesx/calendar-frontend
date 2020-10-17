import React from "react";
import styled from "styled-components";
import MediaQueries from "../../constants/mediaQueries";

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 44px;
  background: black;

  ${MediaQueries.isDesktop} {
    height: 44px;
    width: 100%;
  }
`;

const NavigationBar = (props) => <Div>

</Div>;

export default NavigationBar;
