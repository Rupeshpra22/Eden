import React from "react";
import { InfoWrapper, InfoDescription } from "./Info.style";

const Info = ({ infoHeader, infoDescription }) => {
  return (
    <>
      <InfoWrapper>
        <h1>{infoHeader}</h1>
        <InfoDescription>{infoDescription}</InfoDescription>
      </InfoWrapper>
    </>
  );
};

export default Info;
