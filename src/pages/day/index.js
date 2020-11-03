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

const DayPage = () => {
  const { day, month, year } = useParams();
  const currentWeekday = getWeekdayString(day, month, year);
  const history = useHistory();

  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <DayContent>
      <GoBackButton onClick={goBackHandler}>&#60;</GoBackButton>
      <FormatedDate>
        {currentWeekday} {day} of {Months[month]}, {year}
      </FormatedDate>
      <div>
        <EventPlannedH3>Events planned</EventPlannedH3>
        <EventList>
          <DayItem
            index={0}
            description="Just another reminder"
            checked={true}
          />
          <DayItem
            description="Just another really really really long reminder."
            checked={false}
          />
          <DayItem description="Just another reminder" checked={true} />
        </EventList>
      </div>
      <div>
        {/* Should use a pop-up for this. */}
        <CircularButton>+</CircularButton>
      </div>
    </DayContent>
  );
};

export default DayPage;
