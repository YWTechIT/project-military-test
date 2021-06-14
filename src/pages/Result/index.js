import React from "react";
import Container from "../../components/Container";
import ResultSection from "../../components/ResultSection";
import Button from "../../components/Button";
import DEFAULT_SCORE from "../../constant/DEFAULT_SCORE";
import { useParams } from "react-router-dom";
import getParseArrayToObj from "../../utility/getParseArrayToObj";
import getChangeParameterName from "../../utility/getChangeParameterName";

const Result = ({ setScore, highScoreObj }) => {
  const { cCode } = useParams();
  const decodeQuery = decodeURIComponent(window.location.search.split('?')[1]).split(',');
  const queryObj = getParseArrayToObj(decodeQuery);
  console.log(decodeQuery)
  const queryId = getChangeParameterName(highScoreObj, queryObj);

  return (
    <>
      <Container>
        <ResultSection cCode={cCode} highScoreObj={highScoreObj} queryId={queryId}></ResultSection>
        <Button onClick={() => setScore(DEFAULT_SCORE)} to="/">
          테스트 다시하기
        </Button>
      </Container>
    </>
  );
};

export default Result;
