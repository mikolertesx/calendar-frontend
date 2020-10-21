import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendar,
  faCalendarDay,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import pages from "./pages";

const iconStyle = { style: { fontSize: "32px" }, color: "white" };

const icons = {
  home: <FontAwesomeIcon icon={faHome} color="white" {...iconStyle} />,
  month: <FontAwesomeIcon icon={faCalendar} color="white" {...iconStyle} />,
  day: <FontAwesomeIcon icon={faCalendarDay} color="white" {...iconStyle} />,
  logout: <FontAwesomeIcon icon={faSignOutAlt} color="white" {...iconStyle} />,
  Logo: <FontAwesomeIcon icon={faCalendar} color="white" style={{
    fontSize: "240px"
  }}/>
};

export const TabPages = [
  {
    key: 'Home',
    icons: icons.home,
    url: pages.Home,
  },
  {
    key: 'Month',
    icons: icons.month,
    url: pages.Month,
  },
  {
    key: 'Day',
    icons: icons.day,
    url: pages.Day,
  },
  {
    key: 'Logout',
    icons: icons.logout,
    url: pages.Logout,
  }
];

export default icons;
