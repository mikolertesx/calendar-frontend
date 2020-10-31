import React, { useState } from "react";
import styled from "styled-components";
import MonthItem from "./MonthItem";
import Months, {
  getDaysInMonth,
  getFirstDayOfMonth,
} from "../constants/months";
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
  grid-template-rows: 1fr repeat(6, 3fr);
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

// Todo Rework the way each element is rendered.
const generateDays = (startingDay, monthDays) => {
  const availableDays = [];
  let count = 1;
  for (let i = 0; i < 42; i++) {
    availableDays.push(
      <MonthItem
        key={`day-calendar-${i}`}
        day={i >= startingDay && count <= monthDays ? count : ""}
      />
    );
    if (i >= startingDay) {
      count++;
    }
  }
  return availableDays;
};

const MonthCalendar = ({ month, year }) => {
  const [Year, setYear] = useState(year || new Date().getFullYear());
  const [Month, setMonth] = useState(month || 0);
  const startingDay = getFirstDayOfMonth(Month, Year);
  const monthDays = getDaysInMonth(Month, Year);

  const availableDays = generateDays(startingDay, monthDays);

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

export default MonthCalendar;
