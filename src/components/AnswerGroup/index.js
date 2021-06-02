import React from "react";
import Button from "../Button";
import styled from "styled-components";

const AnswerGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
  width: 100%;
`;

const AnswerGroup = ({ QUIZZES, currentNo, handleClick }) => {
  return (
    <AnswerGroupWrapper>
      {QUIZZES[currentNo].answers.map((answer) => (
        <Button key={answer.text} onClick={() => handleClick(answer)}>
          {answer.text}
        </Button>
      ))}
    </AnswerGroupWrapper>
  );
};

export default AnswerGroup;
