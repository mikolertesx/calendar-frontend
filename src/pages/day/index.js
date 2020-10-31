import React from "react";
import { useParams } from "react-router-dom";

const DayPage = () => {
  const {day} = useParams();

  return <div>
    <p>{day}</p>
  </div>
}

export default DayPage;