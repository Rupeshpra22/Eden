import React from "react";
import Step from "../Step/Step";
import {
  StepperWrapper,
  HorizontalLineWrapper,
  HorizontalLine,
  StepperContainer
} from "./Stepper.style";

const Stepper = ({ currentStep, data }) => {
  return (
    <StepperWrapper>
      {data.map((item, index) => {
        return (
          <StepperContainer key={item}>
            <Step stepName={index + 1} selected={currentStep >= index + 1} />
            {index < data.length - 1 ? (
              <HorizontalLineWrapper>
                <HorizontalLine
                  selected={currentStep === index + 1}
                  completedStep={currentStep >= index + 1}
                />
              </HorizontalLineWrapper>
            ) : (
              ""
            )}
          </StepperContainer>
        );
      })}
    </StepperWrapper>
  );
};

export default Stepper;
