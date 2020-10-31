import React from "react";
import Months from "../../constants/months";
import { getWeekdayString } from "../../constants/weekdays";
import { useParams, useHistory } from "react-router-dom";

const DayPage = () => {
  const { day, month, year } = useParams();
  const currentWeekday = getWeekdayString(day, month, year);
  const history = useHistory();

  const goBackHandler = () => {
    history.goBack();
  };

  return (
    <div>
      <button onClick={goBackHandler}>Go back</button>
      <h2>
        {currentWeekday} {day} of {Months[month]}, {year}
      </h2>
      <div>
        <h3>Events planned</h3>
        <ul style={{marginLeft: "24px"}}>
          <li>Go out</li>
          <li>Do something cool</li>
          <li>Redeem myself</li>
        </ul>
      </div>
      <div>
        {/* Should use a pop-up for this. */}
        <button>Add Event</button>
      </div>
    </div>
  );
};

export default DayPage;
