import styled from "styled-components";

export const PlansWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;
export const PlanContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }
`;
