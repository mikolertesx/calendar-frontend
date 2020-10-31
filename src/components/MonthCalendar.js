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

const generateDays = (month, year) => {
  const availableDays = [];
  const monthDays = getDaysInMonth(month, year);
  const prevMonthDays = getDaysInMonth(
    month !== 0 ? month - 1 : 11,
    month !== 0 ? year : year - 1
  );
  const startingDay = getFirstDayOfMonth(month, year);
  let count = 1;
  for (let i = 0; i < 42; i++) {
    availableDays.push(
      <MonthItem
        key={`day-calendar-${i}`}
        day={
          i >= startingDay && count <= monthDays
            ? count
            : i <= startingDay
            ? prevMonthDays - startingDay + i + 1
            : ""
        }
        disabled={i < startingDay}
        month={month}
        year={year}
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
  const [Month, setMonth] = useState(month || new Date().getMonth());
  const availableDays = generateDays(Month, Year);
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
