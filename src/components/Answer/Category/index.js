import React from "react";
import AnswerStyle from "..";
import CategoryButton from "../../Button/Category";

const CategoryAnswer = ({ QUIZZES, currentNo, handleClick }) => (
  <AnswerStyle>
    {QUIZZES[currentNo].answers.map((answer) => (
      <CategoryButton handleClick={handleClick} answer={answer}></CategoryButton>
    ))}
  </AnswerStyle>
);

export default CategoryAnswer;