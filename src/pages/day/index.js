import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { getWeekdayString } from "../../constants/weekdays";
import {
  DayContent,
  FormatedDate,
  EventPlannedH3,
  EventList,
  CircularButton,
  GoBackButton,
} from "./components";
import DayItem from "../../components/DayItem";
import Months from "../../constants/months";
import Reminder from "../../models/Reminder";

const DayPage = () => {
  const { day, month, year } = useParams();
  const currentWeekday = getWeekdayString(day, month, year);
  const history = useHistory();

  const goBackHandler = () => {
    history.goBack();
  };

  const reminders = Reminder.getReminders(new Date(year, month, day));
  const renderedReminders = reminders
    ? reminders.map((reminder) => (
        <DayItem description="Recordatorio" key={reminder.id} />
      ))
    : null;

  return (
    <DayContent>
      <GoBackButton onClick={goBackHandler}>&#60;</GoBackButton>
      <FormatedDate>
        {currentWeekday} {day} of {Months[month]}, {year}
      </FormatedDate>
      <div>
        <EventPlannedH3>Events planned</EventPlannedH3>
        <EventList>{renderedReminders}</EventList>
      </div>
      <div>
        {/* Should use a pop-up for this. */}
        <CircularButton>+</CircularButton>
      </div>
    </DayContent>
  );
};

export default DayPage;
