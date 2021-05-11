import React from "react";
import AnswerStyle from "..";
import CombatButton from "../../Button/Combat";

const CombatAnswer = ({ QUIZZES, currentNo, handleClick }) => (
  <AnswerStyle>
    {QUIZZES[currentNo].answers.map((answer) => (
      <CombatButton handleClick={handleClick} answer={answer}></CombatButton>
    ))}
  </AnswerStyle>
);

export default CombatAnswer;