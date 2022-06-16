import { useState } from "react";
import Eden from "./component/Eden/Eden";
import StepperContext from "./store/stepper-context";
import "./App.css";

export default function App() {
  const stepData = ["1", "2", "3", "4"];
  const [currentStep, setCurrentStep] = useState(1);
  const stepperUpdateHandler = (value) => {
    if (value <= stepData.length) {
      setCurrentStep(value);
    }
  };
  return (
    <div className="App">
      <StepperContext.Provider
        value={{
          currentStep,
          stepperUpdateHandler
        }}
      >
        <Eden stepData={stepData} />
      </StepperContext.Provider>
    </div>
  );
}
