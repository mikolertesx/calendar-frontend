import React, { useState } from "react";
import Div100Vh from "react-div-100vh";
import styled from "styled-components";
import Icons from "../../constants/iconComponents";
import Colors from "../../constants/colors";

const ParentDiv = styled(Div100Vh)`
  position: absolute;
  width: 100%;
  transition: transform 1s;

  &.hide {
    transform: translateY(-100%);
  }
`;

const Content = styled.div`
  height: 100%;
  width: 100%;
  background: ${Colors.coverBackground};
  display: flex;
  flex-direction: column;
`;

const LogoContent = styled.div`
  color: white;
  width: 100%;
  position: relative;
  margin: auto;
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LogoTitle = styled.div`
  position: absolute;
  background: ${Colors.coverTitle};
  font-family: "Sans-serif";
  font-size: 3rem;
  border-radius: 5px;
  padding: 4px 26px;
  transform: rotate(-45deg);
  color: ${Colors.tabBackground};
`;

const ContentOptionsDiv = styled.div`
  width: 100%;
  flex: 0 0 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-bottom: 0;
`;

const SmallPart = styled.span`
  font-size: 0.9em;
  font-weight: 200;
  font-family: "Open Sans";
`;

const BigPart = styled.span`
  font-size: 1em;
  font-weight: 400;
  font-family: "Open Sans";
`;

const ContentOptionsButton = styled.button`
  margin: 12px auto;
  padding: 24px;
  width: 80%;
  background: ${(props) => (!props.inverse ? Colors.coverOption : "white")};
  border: 1px solid ${Colors.coverOptionBorder};
  border-radius: 15px;
  color: ${(props) => (!props.inverse ? "white" : Colors.coverOption)};
  font-size: 1.25rem;
  cursor: pointer;
`;

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
