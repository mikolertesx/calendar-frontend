import React from "react";
import {
  Content,
  FormContent,
  Details,
  DetailsButton,
  Input,
  Label,
} from "../shared/formElements";

const IndexPage = () => {
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
        <div>
          <Label>Confirm password</Label>
          <Input />
        </div>
      </FormContent>
      <Details>
        <DetailsButton>Register.</DetailsButton>
        <DetailsButton>Go to Login.</DetailsButton>
      </Details>
    </Content>
  );
};

export default IndexPage;
