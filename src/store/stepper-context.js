import React from "react";

const StepperContext = React.createContext({
  currentStep: 1,
  stepperUpdateHandler: () => {}
});

export default StepperContext;
