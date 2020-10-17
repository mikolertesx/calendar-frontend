import React from "react";
import Div100Vh from "react-div-100vh";
import NavBar from "./NavigationBar";
import Main from "./Main";

const Layout = ({ children }) => (
  <Div100Vh>
    <NavBar />
    <Main>{children}</Main>
  </Div100Vh>
);

export default Layout;
