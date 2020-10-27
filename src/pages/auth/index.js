import React, { useState } from "react";
import Vh100Div from "react-div-100vh";
import styled from "styled-components";
import SignPage from "./sign";
import { Pages } from "./shared";
import Cover from "./cover/";

const Content = styled(Vh100Div)`
  position: relative;
`;

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
      {page !== Pages.options && <SignPage Page={page} />}
    </Content>
  );
};

export default AuthPage;
