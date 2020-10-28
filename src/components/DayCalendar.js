import React, { useState } from "react";
import styled from "styled-components";
import DayItem from "./DayItem";
import Months, { getDaysInMonth } from "../constants/months";
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
  overflow: auto;
  display: grid;
  flex: 1 1 auto;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr repeat(6, minmax(128px, 3fr));
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

const DayCalendar = ({ month, year }) => {
  const rightNow = new Date();
  const [Year, setYear] = useState(year || rightNow.getFullYear());
  const [Month, setMonth] = useState(month || 0);
  const firstDay = new Date(Year, Month);
  const startingDay = firstDay.getDay();
  const monthDays = getDaysInMonth(Month, Year);

  const availableDays = [];
  let count = 1;
  for (let i = 0; i < 42; i++) {
    availableDays.push(
      <DayItem
        key={`day-calendar-${i}`}
        day={i >= startingDay && count <= monthDays ? count : ""}
      />
    );
    if (i >= startingDay) {
      count++;
    }
  }

  return (
    <Content>
      <Header
        onClick={() => {
          setMonth((prevMonth) => {
            if (prevMonth + 1 >= Months.length) {
              setYear((prevYear) => prevYear + 1);
              return 0;
            } else {
              return prevMonth + 1;
            }
          });
        }}
      >
        <CurrentMonth>{Months[Month]}</CurrentMonth>
        <CurrentYear>{Year}</CurrentYear>
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
