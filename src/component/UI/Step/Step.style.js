import styled from "styled-components";

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.selected ? "#664de5" : "white")};
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.selected ? "white" : "black")};
  border: 1px solid #ebe9e9;
`;

export const StepWrapper = styled.div`
  width: 80%;
`;
