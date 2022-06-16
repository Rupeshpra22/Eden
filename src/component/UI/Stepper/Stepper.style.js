import styled from "styled-components";

export const StepperWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: center;
  justify-content: center;
`;

export const StepperContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100px;

  &:last-child {
    width: auto;
  }
`;
export const HorizontalLineWrapper = styled.div`
  height: 2px;
  width: 60px;
  background-color: #ebe9e9;
`;

export const HorizontalLine = styled.div`
  width: ${(props) => (props.selected ? "30px" : "60px")};
  background-color: #664de5;
  height: ${(props) => (props.completedStep ? "2px" : "0px")};
`;
