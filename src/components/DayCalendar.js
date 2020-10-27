import React from "react";
import styled from "styled-components";
import DayItem from "./DayItem";
import WeekDays from "../constants/weekdays";

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  border-bottom: 1px solid black;
  background: white;
  padding-top: 24px;
  width: 100%;
  flex: 0 0 96px;
`;

const CurrentMonth = styled.h1`
  color: black;
  text-align: center;
  font-size: 1.25rem;
  font-family: "Open Sans";
`;

const CurrentYear = styled.h2`
  color: gray;
  font-size: 0.9rem;
  font-family: "Open Sans";
  text-align: center;
`;

const Calendar = styled.div`
  display: grid;
  flex: 1 1 auto;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr repeat(5, 2fr);
`;

const CalendarDays = styled.div`
  grid-column: span 7;
  display: flex;
  justify-content: space-around;
  color: gray;
`;

const CalendarDayItem = styled.div`
  color: black;
  margin-top: 3px;
`;

const DayCalendar = () => {
  const availableDays = [];
  for (let i = 0; i < 35; i++) {
    availableDays.push(<DayItem key={`day-calendar-${i}`} day={i} />);
  }

  return (
    <Content>
      <Header>
        <CurrentMonth>January</CurrentMonth>
        <CurrentYear>2020</CurrentYear>
      </Header>
      <Calendar>
        <CalendarDays>
          {WeekDays.map((day) => (
            <CalendarDayItem key={`weekday-header-${day}`}>
              {day[0]}
            </CalendarDayItem>
          ))}
        </CalendarDays>
        {availableDays}
      </Calendar>
    </Content>
  );
};

export default DayCalendar;
