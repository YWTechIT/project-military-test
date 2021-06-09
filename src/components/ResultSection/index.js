import React from "react";
import styled from "styled-components";
import getChangeParameterName from "../../utility/getChangeParameterName";
import Description from "../Description";
import HorizonLine from "../HorizontalLine";
import OtherInstance from "../OtherInstance";
import SocialButtonGroup from "../SocialButtonGroup";
import RESULT from "./result";
import ProgressBar from '../ProgressBar';
import ResultTitle from "../ResultTitle";

const SectionTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 40px;
  text-align: center;
`;

const StyledImage = styled.img`
  display: block;
  border-radius: 16px;
  opacity: 90%;
  margin-bottom: 4px;
  max-width: 94%;
`;

const ProgressWrapper = styled.div`
  align-items: center;
  width: 80%;
  padding-left: 50px;
  padding-right: 50px;
`;

const DescriptionWrapper = styled.div`
  align-items: center;
  width: 90%;
`;

const OtherInstanceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;

const ResultSection = ({ cCode, currentPage }) => {
  const changeParameterObj = getChangeParameterName(currentPage);

  return (
    <>
      <SectionTitle>나와 잘 어울리는 병과는?</SectionTitle>
      <StyledImage src={RESULT[cCode].src} />
      <HorizonLine />
      <ProgressWrapper>
      <ResultTitle># 나의 측정 결과</ResultTitle>
      {Object.entries(changeParameterObj).map((nameAndScore, idx) => (
          <ProgressBar key={idx} name={nameAndScore[0]} percent={nameAndScore[1] * 10} />
      ))}
      </ProgressWrapper>
      <HorizonLine />
      <DescriptionWrapper>
        <Description descriptionTitle={RESULT[cCode].hashTag} descriptionText={RESULT[cCode].description}></Description>
      </DescriptionWrapper>
      <HorizonLine />
      <OtherInstanceWrapper>
        <OtherInstance otherInstanceLink= {RESULT[cCode].similar_link} otherInstanceICON = {RESULT[cCode].similar_icon} otherInstanceName = {RESULT[cCode].similar_name}># 나와 비슷한 병과</OtherInstance>
        <OtherInstance otherInstanceLink = {RESULT[cCode].opposite_link} otherInstanceICON = {RESULT[cCode].opposite_icon} otherInstanceName = {RESULT[cCode].opposite_name}># 나와 반대인 병과</OtherInstance>
      </OtherInstanceWrapper>
      <HorizonLine />
      <SocialButtonGroup />
    </>
  );
};

export default ResultSection;
