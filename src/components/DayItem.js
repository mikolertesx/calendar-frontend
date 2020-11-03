import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const DayItemContent = styled.div`
  width: 100%;
  height: 128px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:first-of-type {
    border-top: 1px solid black;
  }
`;

const DayItemDescription = styled.p`
  font-family: "Arial";
  flex: 1 1 auto;
  margin: 12px auto;
`;

const Icon = styled.div`
  box-sizing: border-box;
  flex: 0 0 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  height: 100%;
  background: red;
  color: white;

  transition: color 0.4s, background 0.1s;

  &:hover {
    background: white;
    color: red;
  }
`;

const Checkbox = styled.input`
  cursor: pointer;
  flex: 0 0 32px;
  height: 32px;
  margin: 4px;
`;

const DayItem = ({ description, checked }) => (
  <DayItemContent>
    <Checkbox type="checkbox" checked={checked} />
    <DayItemDescription>{description}</DayItemDescription>
    <Icon>
      <FontAwesomeIcon icon={faTrash} />
    </Icon>
  </DayItemContent>
);

export default DayItem;
