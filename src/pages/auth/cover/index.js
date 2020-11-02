import React, { useState } from "react";
import { ContentOptionsButton, ContentOptionsDiv } from "../components";
import { ParentDiv, Content } from "./components";
import Logo from "../Logo";

const Cover = ({ onSignIn, onLogin }) => {
  const [hide, setHide] = useState(false);

  return (
    <ParentDiv className={hide ? "hide" : ""}>
      <Content>
        <Logo />
        <ContentOptionsDiv>
          <ContentOptionsButton
            onClick={() => {
              onSignIn();
              setHide(true);
            }}
          >
            Sign up
          </ContentOptionsButton>
          <ContentOptionsButton
            onClick={() => {
              onLogin();
              setHide(true);
            }}
            inverse={true}
          >
            Log in
          </ContentOptionsButton>
        </ContentOptionsDiv>
      </Content>
    </ParentDiv>
  );
};

export default Cover;
