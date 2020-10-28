import React from "react";
import styled from "styled-components";
import MonthItem from "./MonthItem";

const MonthContent = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

const MonthCalendar = () => {
  const content = [];
  for (let i = 0; i < 12; i++) {
    content.push(<MonthItem month={i} key={`Month-${i}-item`} />);
  }

  return <MonthContent>{content}</MonthContent>;
};

export default MonthCalendar;
