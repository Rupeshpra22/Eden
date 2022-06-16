import React from "react";
import Button from "../UI/Button/Button";
import Info from "../Info/Info";
import InputText from "../UI/InputText/InputText";

const Welcome = () => {
  return (
    <>
      <Info
        infoHeader="Welcome! First things first..."
        infoDescription="You can always change them later"
      />
      <InputText label="Full Name" />
      <InputText label="Display Name" />
      <Button />
    </>
  );
};

export default Welcome;
