import React from "react";
import Container from "../../components/Container";
import ResultSection from "../../components/ResultSection";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import LinkWrapper from "../../components/LinkWrapper";

const Result = ({ maxKey }) => {
  return (
    <>
      <Container>
        <ResultSection maxKey={maxKey}></ResultSection>
        <LinkWrapper>
          <Link to="/">
            <Button>테스트 다시하기</Button>
          </Link>
        </LinkWrapper>
      </Container>
    </>
  );
};

export default Result;
