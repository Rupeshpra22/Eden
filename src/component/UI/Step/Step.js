import React, { useContext } from "react";
import StepperContext from "../../../store/stepper-context";
import { Circle } from "./Step.style";

const Step = ({ stepName, selected }) => {
  const context = useContext(StepperContext);
  const { stepperUpdateHandler } = context;
  return (
    <>
      <Circle
        selected={selected}
        onClick={() => stepperUpdateHandler(stepName)}
      >
        {stepName}
      </Circle>
    </>
  );
};

export default Step;
