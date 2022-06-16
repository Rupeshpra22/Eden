import React from "react";
import { InputTextWrapper, InputLabel, Input } from "./InputText.style";

const InputText = ({ label, customWidth = 0, customBorderRadius = 0 }) => {
  return (
    <InputTextWrapper customWidth={customWidth}>
      <InputLabel htmlFor={label}>{label}</InputLabel>
      <Input id={label} type="text" customBorderRadius={customBorderRadius} />
    </InputTextWrapper>
  );
};

export default InputText;
