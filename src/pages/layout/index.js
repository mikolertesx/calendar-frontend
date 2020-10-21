import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Div100Vh from "react-div-100vh";
import Auth from "../auth";
import NavBar from "./NavigationBar";
import Main from "./Main";

// TODO Use context for changing state.
const Layout = ({ children}) => {
  const [authState] = useContext(AuthContext);
  if (!authState) {
    return <Auth/>;
  }
  return (
    <Div100Vh>
      <NavBar />
      <Main>{children}</Main>
    </Div100Vh>
  );
};

export default Layout;
