import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Pages from "../constants/pages";

const Content = styled(Link)`
  /* background: gray; */
  text-decoration: none;
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
    <Content className={day ? "" : "unavailable"} to={Pages.Day.replace(":day", day)}>
      <p>{day}</p>
    </Content>
  );
};

export default MonthItem;
