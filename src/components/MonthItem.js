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
  background: white;
  color: black;

  &.unavailable {
    background: gray;
    border-right: none;
    border-bottom: none;
    border-top: none;
  }

  &.disabled {
    background: white;
    color: lightgray;
  }
`;

const ContentUnavailable = styled.div`
  background: white;
`;

const MonthItem = ({ day, month, year, disabled }) => {
  if (!day) {
    return <ContentUnavailable />;
  }

  let newPage = Pages.Day.replace(":day", day)
    .replace(":month", month)
    .replace(":year", year);

  if (disabled) {
    newPage = "#";
  }

  return (
    <Content className={disabled ? "disabled" : ""} to={newPage}>
      <p>{day}</p>
    </Content>
  );
};

export default MonthItem;
