import React from "react";
import Icons from "../../constants/iconComponents";
import { LogoTitle, LogoContent, SmallPart, BigPart } from "./shared";

const Logo = () => {
  return (
    <LogoContent>
      {Icons.Logo}
      <LogoTitle>
        <SmallPart>My</SmallPart>
        <BigPart>Calendar</BigPart>
      </LogoTitle>
    </LogoContent>
  );
};

export default Logo;
