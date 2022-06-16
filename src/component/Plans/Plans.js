import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Info from "../Info/Info";
import Plan from "./Plan/Plan";
import { PlansWrapper, PlanContainer } from "./Plans.style";

const Plans = () => {
  let plansData = [
    {
      icon: "fa fa-user",
      header: "For myself",
      description: "Write better. Think more clearer. Stay organized"
    },
    {
      icon: "fa fa-users",
      header: "With my team",
      description: "Wikis, docs, tasks & projects, all in one place."
    }
  ];

  const [selectedPlan, setSelectedPlan] = useState(1);
  const planHandler = (value) => {
    setSelectedPlan(value);
  };
  return (
    <>
      <Info
        infoHeader="How are you planning to use Eden"
        infoDescription="We'll stream your setup experience accordingly"
      />
      <PlansWrapper>
        <PlanContainer>
          {plansData.map((plan, index) => {
            return (
              <Plan
                key={index}
                icon={plan.icon}
                header={plan.header}
                description={plan.description}
                planSelect={planHandler}
                selectedPlan={selectedPlan === index + 1}
                currentPlan={index + 1}
              />
            );
          })}
        </PlanContainer>
        <Button />
      </PlansWrapper>
    </>
  );
};

export default Plans;
