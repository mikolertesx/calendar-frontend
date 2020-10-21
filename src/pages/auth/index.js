import React, { useState } from "react";
import Login from "./login";
import SignIn from "./signin";
import Vh100Div from "react-div-100vh";
import styled from "styled-components";
import Cover from "./cover";

const Content = styled(Vh100Div)`
  position: relative;
`;

const Pages = {
  Options: "OPTIONS",
  LogIn: "LOGIN",
  SignIn: "SIGNIN",
};

const AuthPage = () => {
  const [page, setPage] = useState(Pages.Options);

  const changePage = (newPage) => {
    setPage(newPage);
  };

  return (
    <Content>
      <Cover
        onSignIn={() => changePage(Pages.SignIn)}
        onLogin={() => changePage(Pages.LogIn)}
      />
      {page === Pages.LogIn ? <Login /> : <SignIn />}
    </Content>
  );
};

export default AuthPage;
