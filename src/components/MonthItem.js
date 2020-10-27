import React from "react";
import styled from "styled-components";
import Months from "../constants/months";

const Content = styled.div`
  background: white;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
`;

const MonthItem = ({ month }) => {
  return (
    <Content>
      <p>{Months[month]}</p>
    </Content>
  );
};

export default MonthItem;
