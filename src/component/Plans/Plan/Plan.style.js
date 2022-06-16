import styled from "styled-components";

export const PlanWrapper = styled.div`
  border: ${(props) =>
    props.currentSelectedPlan ? "1px solid #664de5" : "1px solid #ebe9e9"};
  margin-right: 10px;
  width: 47%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  cursor: pointer;
  &:last-child {
    margin-right: 0px;
  }

  @media (max-width: 500px) {
    min-width: 200px;
    margin-bottom: 20px;
    margin-right: 0px;
  }
`;

export const PlanIcon = styled.div`
  font-size: 25px;
  margin-bottom: 15px;
`;

export const PlanHeader = styled.h3`
  margin-bottom: 10px;
  text-align: left;
`;

export const PlanDescription = styled.div`
  text-align: left;
`;
