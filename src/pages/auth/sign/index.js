import React from "react";
import { Pages } from "../shared";
import { faIdCard, faAsterisk } from "@fortawesome/free-solid-svg-icons";
import Colors from "../../../constants/colors";
import IconInput from "../../../components/IconInput";
import styled from "styled-components";

const Content = styled.div`
  padding-top: 12px;
  height: 100%;
  background: ${Colors.coverBackground};
`;

const AuthSign = ({ Page }) => {
  return (
    <Content>
      <IconInput icon={faIdCard} title="Username" />
      <IconInput icon={faAsterisk} title="Password" type="password" />
      {Page === Pages.SignIn && (
        <IconInput icon={faAsterisk} title="Confirm password" type="password" />
      )}
    </Content>
  );
};

export default AuthSign;
