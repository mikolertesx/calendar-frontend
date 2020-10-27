import React from "react";
import { Pages, ContentOptionsButton } from "../shared";
import { faIdCard, faAsterisk } from "@fortawesome/free-solid-svg-icons";
import Colors from "../../../constants/colors";
import IconInput from "../../../components/IconInput";
import styled from "styled-components";

const Content = styled.div`
  padding-top: 12px;
  height: 100%;
  background: ${Colors.coverBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Options = styled.div`
  margin-top: auto;
  flex: 0 0 65px;
  display: flex;
  justify-content: space-between;
`;

const CustomOptions = styled(ContentOptionsButton)`
  margin: 0;
  border-radius: 0;
  border: transparent;
`;

const AuthSign = ({ Page }) => {
  return (
    <Content>
      <IconInput icon={faIdCard} title="Username" />
      <IconInput icon={faAsterisk} title="Password" type="password" />
      {Page === Pages.SignIn && (
        <IconInput icon={faAsterisk} title="Confirm password" type="password" />
      )}
    <Options>
      <CustomOptions>Confirm</CustomOptions>
      <CustomOptions inverse={true}>Go Back</CustomOptions>
    </Options>
    </Content>
  );
};

export default AuthSign;
