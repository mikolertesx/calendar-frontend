import React from "react";
import styled from "styled-components";
import YearItem from "./YearItem";

const MonthContent = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
`;

const YearCalendar = () => {
  const content = [];
  for (let i = 0; i < 12; i++) {
    content.push(<YearItem month={i} key={`Month-${i}-item`} />);
  }

  return <MonthContent>{content}</MonthContent>;
};

export default YearCalendar;
