import React from "react";
import AnswerStyle from "..";
import SupplyButton from "../../Button/Supply";

const SupplyAnswer = ({ QUIZZES, currentNo, handleClick }) => (
  <AnswerStyle>
    {QUIZZES[currentNo].answers.map((answer) => (
      <SupplyButton handleClick={handleClick} answer={answer}></SupplyButton>
    ))}
  </AnswerStyle>
);

export default SupplyAnswer;