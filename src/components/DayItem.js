import React from "react";
import styled from "styled-components";

const Content = styled.div`
  /* background: gray; */
  border-top: 1px solid lightgray;
  border-right: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  text-align: center;
  color: black;

  &:nth-child(even) {
    background: lightgray;
  }

  &.unavailable {
    background: gray;
    border-right: none;
    border-bottom: none;
    border-top: none;
  }
`;

const DayItem = ({ day }) => {
  return (
    <Content className={day ? "" : "unavailable"}>
      <p>{day}</p>
    </Content>
  );
};

export default DayItem;
