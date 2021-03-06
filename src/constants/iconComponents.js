import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCalendar,
  faCalendarDay,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import pages from "./pages";

const iconStyle = { style: { fontSize: "32px" } };

const icons = {
  home: <FontAwesomeIcon icon={faHome} {...iconStyle} />,
  year: <FontAwesomeIcon icon={faCalendar} {...iconStyle} />,
  month: <FontAwesomeIcon icon={faCalendarDay} {...iconStyle} />,
  logout: <FontAwesomeIcon icon={faSignOutAlt} {...iconStyle} />,
  Logo: (
    <FontAwesomeIcon
      icon={faCalendar}
      style={{
        fontSize: "240px",
      }}
    />
  ),
};

export const TabPages = [
  {
    key: "Home",
    icons: icons.home,
    url: pages.Home,
  },
  {
    key: "Year",
    icons: icons.year,
    url: pages.Year,
  },
  {
    key: "Month",
    icons: icons.month,
    url: pages.Month,
  },
  {
    key: "Logout",
    icons: icons.logout,
    url: pages.Logout,
  },
];

export default icons;
