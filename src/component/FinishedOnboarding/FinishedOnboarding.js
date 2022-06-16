import React from "react";
import Button from "../UI/Button/Button.js";
import Info from "../Info/Info";
import { IconWrapper, Icon } from "./FinishedOnboarding.style";

const FinishedOnboarding = () => {
  return (
    <>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <Info
        infoHeader="Congratulations, Eren!"
        infoDescription="You can completed onboarding, you can start using the Eden!"
      />
      <Button value="Launch Eden" />
    </>
  );
};

export default FinishedOnboarding;
