import React, { useState } from "react";
import styled from "styled-components";
import DayItem from "./DayItem";
import Months from "../constants/months";
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

const monthMaxDays = (month) => {
  if (month === 1) {
    return 29;
  }
  return month % 2 === 0 ? 31 : 30;
};

const DayCalendar = ({ month }) => {
  const [Month, setMonth] = useState(month || 0);
  const rightNow = new Date();
  const firstDay = new Date(rightNow.getFullYear(), Month);
  const startingDay = firstDay.getDay();
  const monthDays = monthMaxDays(month);

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
          setMonth((prevMonth) =>
            prevMonth < Months.length - 1 ? prevMonth + 1 : 0
          );
        }}
      >
        <CurrentMonth>{Months[Month]}</CurrentMonth>
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
