import React from "react";
import Div100Vh from "react-div-100vh";
import Auth from "../auth";
import NavBar from "./NavigationBar";
import Main from "./Main";

const Layout = ({ children, auth }) => {
  const fixedAuth = auth || false;
  if (!fixedAuth) {
    return <Auth />;
  }
  return (
    <Div100Vh>
      fixedAuth && <NavBar />
      fixedAuth && <Main>{children}</Main>
    </Div100Vh>
  );
};

export default Layout;
