import React from "react";
import {
  Content,
  FormContent,
  Details,
  DetailsButton,
  Input,
  Label,
} from "../shared/formElements";

const LoginPage = () => {
  return (
    <Content>
      <FormContent>
        <div>
          <Label>Username</Label>
          <Input />
        </div>
        <div>
          <Label>Password</Label>
          <Input />
        </div>
      </FormContent>
      <Details>
        <DetailsButton>Log in.</DetailsButton>
        <DetailsButton>Go to Register.</DetailsButton>
      </Details>
    </Content>
  );
};

export default LoginPage;
