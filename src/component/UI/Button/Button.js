import React, { useContext } from "react";
import StepperContext from "../../../store/stepper-context";
import EdenButton from "./Button.style";

const Button = ({ value = "Create Workspace" }) => {
  const context = useContext(StepperContext);
  const { stepperUpdateHandler, currentStep } = context;
  return (
    <EdenButton onClick={() => stepperUpdateHandler(currentStep + 1)}>
      {value}
    </EdenButton>
  );
};

export default Button;
