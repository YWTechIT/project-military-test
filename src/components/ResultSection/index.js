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
  font-size: 26px;
  margin: 20px 10px;;
`;

const StyledImage = styled.img`
  display: block;
  border-radius: 30px;
  opacity: 90%;
  margin: 0px 10px 16px 10px;
  max-width: 90%;
`;

const ProgressWrapper = styled.div`
  align-items: center;
  width: 100%;
`;

const DescriptionWrapper = styled.div`
  align-items: center;
  width: 86%;
  margin: 0px 10px 16px 10px;
`;

const OtherInstanceWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 94%;
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
