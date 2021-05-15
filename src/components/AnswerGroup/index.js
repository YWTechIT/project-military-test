import React from "react";
import Button from "../Button";
import styled from 'styled-components';

const AnswerGroupWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
`;

const AnswerGroup = ({QUIZZES, currentNo, handleClick}) => {
  return (
    <AnswerGroupWrapper>
      {QUIZZES[currentNo].answers.map((answer) => (
        <Button
          text={answer.text}
          onClick={() => handleClick(answer)}
        ></Button>
      ))}
    </AnswerGroupWrapper>
  );
};

export default AnswerGroup;

