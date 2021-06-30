import React from "react";
import styled from "styled-components";
import Description from "../Description";
import HorizonLine from "../HorizontalLine";
import SocialButtonGroup from "../SocialButtonGroup";
import ProgressBar from "../ProgressBar";
import CardBox from "../CardBox";
import PropTypes from "prop-types";
import RESULT from "./result";
import getLimitExceedScore from "../../utility/getLimitExceedScore";
import BlurredUpImg from "../BlurredUpImg";

const ResultTitle = styled.h1`
  margin: 20px 10px;
`;

const SectionTitle = styled.h2`
  color: ${(props) => props.theme.HashTag};
  word-break: keep-all;
`;

const ProgressBarsContainer = styled.div`
  text-align: -webkit-center;
  width: 100%;
  display: ${(props) =>
    Object.values(props.queryId).includes(NaN) && true ? "none" : "block"};
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

const ResultSection = (props) => {
  const { cCode, queryId } = props;
  return (
    <>
      <ResultTitle>나와 잘 어울리는 병과는?</ResultTitle>
      <BlurredUpImg src = {RESULT[cCode].src} placeholder={RESULT[cCode].base_64_src} alt = {RESULT[cCode].title} queryId={queryId}/>
      <ProgressBarsContainer queryId={queryId}>
        <HorizonLine />
        <SectionTitle># 나의 측정 결과</SectionTitle>
        <ProgressBarsWrapper>
          {Object.entries(queryId).map(([key, value], idx) => (
            <ProgressBar
              key={idx}
              name={key}
              percent={getLimitExceedScore(value)}
            />
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
