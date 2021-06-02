import React from "react";
import styled from "styled-components";
import HorizonLine from "../HorizontalLine";
import SocialButtonGroup from "../SocialButtonGroup";
import RESULT from "./result";

const SectionTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-top: 20px;
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

const Line = styled.div`
  width: 50%
  height: 100px;
  border: 3px;
`;

const ResultSection = ({ cCode }) => {
  return (
    <>
      <SectionTitle>나와 잘 맞는 병과는?</SectionTitle>
      <StyledImage src={RESULT[cCode].src} />
      <ResultTitle>{RESULT[cCode].title}</ResultTitle>
      <SocialButtonGroup></SocialButtonGroup>
      <HorizonLine></HorizonLine>
    </>
  );
};

export default ResultSection;
