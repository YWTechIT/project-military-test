import React from "react";
import styled from "styled-components";
import RESULT from "./result";

const SectionTitle = styled.h1`
  font-size: 64px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 56px;
  text-align: center;
`;

const ResultTitle = styled.div`
  font-size: 32px;
  margin-bottom: 56px;
  text-align: center;
`;

const StyledImage = styled.img`
  display: block;
  border-radius: 16px;
  opacity: 95%;
  margin-bottom: 4px;
  max-width: 100%;
`;

// const Source = styled.p`
//   margin-top: 4px;
// `;

const ResultSection = ({ cCode }) => {
  return (
    <>
      <SectionTitle>당신은 혹시?</SectionTitle>
      <StyledImage src={RESULT[cCode].src} />
      <ResultTitle>{RESULT[cCode].title}</ResultTitle>
    </>
  );
};

export default ResultSection;
