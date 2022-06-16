import React from "react";
import {
  PlanWrapper,
  PlanIcon,
  PlanHeader,
  PlanDescription
} from "./Plan.style";

const Plan = ({
  icon,
  header,
  description,
  planSelect,
  selectedPlan,
  currentPlan
}) => {
  return (
    <PlanWrapper
      currentSelectedPlan={selectedPlan}
      onClick={() => planSelect(currentPlan)}
    >
      <PlanIcon>
        <i
          className={icon}
          style={{ color: selectedPlan ? "#664de5" : "black" }}
        ></i>
      </PlanIcon>
      <PlanHeader>{header}</PlanHeader>
      <PlanDescription>{description}</PlanDescription>
    </PlanWrapper>
  );
};

export default Plan;
