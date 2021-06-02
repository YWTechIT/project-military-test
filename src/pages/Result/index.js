import React from "react";
import Container from "../../components/Container";
import ResultSection from "../../components/ResultSection";
import Button from "../../components/Button";
import DEFAULT_SCORE from "../../constant/DEFAULT_SCORE";
import { useParams } from "react-router-dom";

const Result = ({ setScore }) => {
  const { cCode } = useParams();

  return (
    <>
      <Container>
        <ResultSection cCode={cCode}></ResultSection>
        <Button onClick={() => setScore(DEFAULT_SCORE)} to="/">
          테스트 다시하기
        </Button>
      </Container>
    </>
  );
};

export default Result;
