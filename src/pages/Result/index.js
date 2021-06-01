import React from "react";
import Container from "../../components/Container";
import ResultSection from "../../components/ResultSection";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import LinkWrapper from "../../components/LinkWrapper";
import DEFAULT_SCORE from "../../constant/DEFAULT_SCORE";

const Result = ({ setScore, maxKey }) => {
  return (
    <>
      <Container>
        <ResultSection maxKey={maxKey}></ResultSection>
        <LinkWrapper>
          <Link to="/">
            <Button onClick={() => setScore(DEFAULT_SCORE)}>테스트 다시하기</Button>
          </Link>
        </LinkWrapper>
      </Container>
    </>
  );
};

export default Result;
