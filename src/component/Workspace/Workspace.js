import React from "react";
import Button from "../UI/Button/Button";
import Info from "../Info/Info";
import InputText from "../UI/InputText/InputText";
import {
  WorkspaceWrapper,
  AdditionalLabelInfo,
  UrlPrefix,
  WorkspaceUrlContainer,
  WorkspaceUrlWrapper,
  WorkspaceUrlLabel
} from "./Workspace.style";

const Workspace = () => {
  return (
    <>
      <Info
        infoHeader="Lets setup a home for all your work"
        infoDescription="You can always create another workspace later."
      />
      <WorkspaceWrapper>
        <InputText label="Workspace Name" />
        <WorkspaceUrlContainer>
          <WorkspaceUrlLabel>
            <label htmlFor="Workspace Url">Workspace Url</label>
            <AdditionalLabelInfo>(Optional)</AdditionalLabelInfo>
          </WorkspaceUrlLabel>
          <WorkspaceUrlWrapper>
            <UrlPrefix>www.eden.com/</UrlPrefix>
            <InputText customWidth="70%" customBorderRadius="0px" />
          </WorkspaceUrlWrapper>
        </WorkspaceUrlContainer>
        <Button />
      </WorkspaceWrapper>
    </>
  );
};

export default Workspace;
