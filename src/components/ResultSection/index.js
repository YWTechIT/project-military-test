import React from "react";
import styled from "styled-components";
import Description from "../Description";
import HorizonLine from "../HorizontalLine";
import SocialButtonGroup from "../SocialButtonGroup";
import ProgressBar from "../ProgressBar";
import CardBox from "../CardBox";
import PropTypes from "prop-types";
import RESULT from "./result";

const ResultTitle = styled.h1`
  margin: 20px 10px;
`;

const SectionTitle = styled.h2`
  color: ${(props) => props.theme.HashTag};
  word-break: keep-all;
`;

const StyledImage = styled.img`
  display: block;
  border-radius: 30px;
  opacity: 96%;
  margin: 0px 10px 16px 10px;
  max-width: 88%;
  @media screen and (min-width: 600px) {
    max-width: 96%;
  }
`;

const ProgressBarsContainer = styled.div`
  width: 100%;
`;

const ProgressBarsWrapper = styled.div`
  margin-right: 40px;
`;

const DescriptionWrapper = styled.div`
  align-items: center;
  width: 86%;
  margin: 0px 10px 16px 10px;
`;

const CardBoxWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 94%;
  margin: 0px 10px 16px 10px;
`;

const ResultSection = ({ cCode, queryId }) => {
  return (
    <>
      <ResultTitle>나와 잘 어울리는 병과는?</ResultTitle>
      <StyledImage src={RESULT[cCode].src} />
      <HorizonLine />
      <ProgressBarsContainer>
        <SectionTitle># 나의 측정 결과</SectionTitle>
        <ProgressBarsWrapper>
          {Object.entries(queryId).map(([key, value], idx) => (
            <ProgressBar key={idx} name={key} percent={value * 10} />
          ))}
        </ProgressBarsWrapper>
      </ProgressBarsContainer>
      <HorizonLine />
      <DescriptionWrapper>
        <Description
          descriptionTitle={RESULT[cCode].hashTag}
          descriptionText={RESULT[cCode].description}
        ></Description>
      </DescriptionWrapper>
      <HorizonLine />
      <CardBoxWrapper>
        <CardBox
          cardBoxLink={RESULT[cCode].similar_link}
          cardBoxICON={RESULT[cCode].similar_icon}
          cardBoxName={RESULT[cCode].similar_name}
        >
          # 나와 비슷한 병과
        </CardBox>
        <CardBox
          cardBoxLink={RESULT[cCode].opposite_link}
          cardBoxICON={RESULT[cCode].opposite_icon}
          cardBoxName={RESULT[cCode].opposite_name}
        >
          # 나와 반대인 병과
        </CardBox>
      </CardBoxWrapper>
      <HorizonLine />
      <SocialButtonGroup />
    </>
  );
};

ResultSection.propTypes = {
  cCode: PropTypes.string.isRequired,
  queryId: PropTypes.object.isRequired,
};

export default ResultSection;
