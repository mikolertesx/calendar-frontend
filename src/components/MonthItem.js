import React from "react";
import styled from "styled-components";

const Content = styled.div`
  /* background: gray; */
  display: flex;
  align-items: center;
  justify-content: center;
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

const ContentUnavailable = styled.div`
  background: white;
`;

const MonthItem = ({ day }) => {
  if (!day) {
    return <ContentUnavailable />;
  }
  return (
    <Content className={day ? "" : "unavailable"}>
      <p>{day}</p>
    </Content>
  );
};

export default MonthItem;
