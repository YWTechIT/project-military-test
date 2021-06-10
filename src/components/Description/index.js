import React from "react";
import ResultText from "../ResultText";
import ResultTitle from "../ResultTitle";

const Description = ({descriptionTitle, descriptionText}) => {
  return (
    <>
      <ResultTitle>{descriptionTitle}</ResultTitle>
      <ResultText>{descriptionText}</ResultText>
    </>
  );
};

export default Description;