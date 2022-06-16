import styled from "styled-components";

export const InputTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20px;
  width: ${(props) => (props.customWidth ? props.customWidth : "100%")};
  @media(max-width: 700px) {
    width: ${(props)=> (props.customWidth ?  "60%" : "100%")}
  }
`;

export const InputLabel = styled.label`
  text-align: left;
`;

export const Input = styled.input`
  outline: none;
  height: 40px;
  border-top-left-radius: ${(props) =>
    props.customBorderRadius ? "0px" : "5px"};
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: ${(props) =>
    props.customBorderRadius ? "0px" : "5px"};
  border-top-right-radius: 5px;
  border: 1px solid #ebe9e9;
  color: #aab3c5;
  padding: 0px 5px;
  margin-top: 5px;
  font-size: 15px;
`;
