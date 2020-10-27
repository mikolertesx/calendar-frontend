import React, { useState } from "react";
import { ContentOptionsButton, ContentOptionsDiv } from "../shared";
import {
  ParentDiv,
  Content,
  LogoContent,
  LogoTitle,
  SmallPart,
  BigPart,
} from "./components";
import Icons from "../../../constants/iconComponents";

const Cover = ({ onSignIn, onLogin }) => {
  const [hide, setHide] = useState(false);

  return (
    <ParentDiv className={hide ? "hide" : ""}>
      <Content>
        <LogoContent>
          {Icons.Logo}
          <LogoTitle>
            <SmallPart>My</SmallPart>
            <BigPart>Calendar</BigPart>
          </LogoTitle>
        </LogoContent>
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
