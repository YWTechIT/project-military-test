import React from "react";
import styled from "styled-components";
import ResultText from "../ResultText";
import ResultTitle from "../ResultTitle";

const Description = ({descriptionHashTag, descriptionText}) => {
  return (
    <>
      <ResultTitle>{descriptionHashTag}</ResultTitle>
      <ResultText>{descriptionText}</ResultText>
    </>
  );
};

export default Description;