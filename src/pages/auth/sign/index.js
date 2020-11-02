import React from "react";
import { Pages } from "../components";
import { faIdCard, faAsterisk } from "@fortawesome/free-solid-svg-icons";
import IconInput from "../../../components/IconInput";
import { Content, Options, CustomOptions } from "./components";

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
