import React from "react";
import styled from "styled-components";

const Content = styled.div`
  /* background: gray; */
  border-top: 1px solid lightgray;
  border-right: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  color: black;
`;

const DayItem = ({day}) => {
  return <Content>
    <p>{day}</p>
  </Content>;
};

export default DayItem;
