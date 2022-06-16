import React, { useContext } from "react";
import StepperContext from "../../store/stepper-context";
import FinishedOnboarding from "../FinishedOnboarding/FinishedOnboarding";
import Plans from "../Plans/Plans";
import Stepper from "../UI/Stepper/Stepper";
import Welcome from "../Welcome/Welcome";
import Workspace from "../Workspace/Workspace";
import { MainSection, LogoContainer } from "./Eden.style";

const Eden = ({ stepData }) => {
  // const [currentStep, setCurrentStep] = useState(1);
  // const stepData = ["1", "2", "3", "4"];

  // const stepperUpdateHandler = (value) => {
  //   if (value <= stepData.length) {
  //     setCurrentStep(value);
  //   }
  // };
  const context = useContext(StepperContext);
  const { currentStep } = context;
  return (
    <>
      <LogoContainer></LogoContainer>
      <Stepper data={stepData} currentStep={currentStep} />
      <MainSection>
        {currentStep === 1 && <Welcome />}
        {currentStep === 2 && <Workspace />}
        {currentStep === 3 && <Plans />}
        {currentStep === 4 && <FinishedOnboarding />}
      </MainSection>
    </>
  );
};

export default Eden;
