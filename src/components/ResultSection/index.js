import React from "react";
import styled from "styled-components";
import Description from "../Description";
import HorizonLine from "../HorizontalLine";
import OtherInstance from "../OtherInstance";
import SocialButtonGroup from "../SocialButtonGroup";
import RESULT from "./result";

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
  opacity: 95%;
  margin-bottom: 4px;
  max-width: 94%;
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

const ResultSection = ({ cCode }) => {
  return (
    <>
      <SectionTitle>나와 잘 어울리는 병과는?</SectionTitle>
      <StyledImage src={RESULT[cCode].src} />
      <HorizonLine></HorizonLine>
      <DescriptionWrapper>
        <Description descriptionHashTag={RESULT[cCode].hashTag} descriptionText={RESULT[cCode].description}></Description>
      </DescriptionWrapper>
      <HorizonLine />
      <OtherInstanceWrapper>
        <OtherInstance otherInstanceICON = {RESULT[cCode].similar_icon} otherInstanceText = {RESULT[cCode].similar}># 나와 비슷한 병과는...</OtherInstance>
        <OtherInstance otherInstanceICON = {RESULT[cCode].opposite_icon} otherInstanceText = {RESULT[cCode].opposite}># 나와 반대인 병과는...</OtherInstance>
      </OtherInstanceWrapper>
      <HorizonLine />
      <SocialButtonGroup></SocialButtonGroup>
      <HorizonLine></HorizonLine>
    </>
  );
};

export default ResultSection;
