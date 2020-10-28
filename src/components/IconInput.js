import React, { useRef } from "react";
import styled from "styled-components";
import Colors from "../constants/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = styled.div`
  cursor: text;
  margin: 0 auto;
  width: 90%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  background: ${Colors.coverForeGround};
  color: white;
  border-bottom: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-bottom: 12px;
  /* border-radius: 5px; */
`;

const InputFlex = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 16px;
`;

const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 32px;
  height: 32px;
`;

const Input = styled.input`
  padding: 6px;
  margin-left: 8px;
  border: none;
  background: transparent;
  outline: none;
  color: white;
  /* background: rgba(0, 0, 0, 0.1); */
  display: block;
  flex: 1 1 auto;
  font-size: 1rem;
  transition: font-size 0.3s;

  &:focus {
    font-size: 1.1rem;
  }
`;

const Title = styled.h2`
  margin-left: 22px;
  font-size: 1rem;
  font-weight: 300;
  font-family: "Open Sans";
  color: white;
`;

// Icon should be a renderable element.
const IconInput = ({ icon, title, ...props }) => {
  const inputElement = useRef(null);
  return (
    <Content
      onClick={() => {
        inputElement.current.focus();
      }}
    >
      <Title>{title}</Title>
      <InputFlex>
        <IconDiv>
          <FontAwesomeIcon icon={icon} style={{ fontSize: "24px" }} />
        </IconDiv>
        <Input {...props} ref={inputElement} />
      </InputFlex>
    </Content>
  );
};

export default IconInput;
