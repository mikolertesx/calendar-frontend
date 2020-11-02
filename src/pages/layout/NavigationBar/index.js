import React from "react";

import { TabPages } from "../../../constants/iconComponents";
import { Div, Flex, IconLink } from "../components";

const NavigationBar = () => (
  <Div>
    <Flex>
      {TabPages.map((page) => (
        <IconLink
          to={page.url}
          key={page.key}
          exact={page.url === "/"}
        >
          {page.icons}
        </IconLink>
      ))}
    </Flex>
  </Div>
);

export default NavigationBar;
