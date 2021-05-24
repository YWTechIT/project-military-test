import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AnswerGroup from "../../components/AnswerGroup";
import Container from "../../components/Container";
import Question from "../../components/Question";
import { CATEGORIZE_QUIZ } from "./Constant";

const Category = ({ score, setScore }) => {
  let history = useHistory();
  const [currentNo, setCurrentNo] = useState(0);

  const categoryHandleClick = ({ combat, supply }) => {
    setScore((score) => ({
      ...score,
      category: {
        combatScore: score.category.combatScore + combat,
        supplyScore: score.category.supplyScore + supply,
      },
    }));

    if (currentNo === CATEGORIZE_QUIZ.length - 1) {
      history.push("/loading");
    } else {
      setCurrentNo((currentNo) => currentNo + 1);
    }
  };

  return (
    <Container>
      <Question QUIZZES={CATEGORIZE_QUIZ} currentNo={currentNo}></Question>
      <AnswerGroup
        QUIZZES={CATEGORIZE_QUIZ}
        currentNo={currentNo}
        handleClick={categoryHandleClick}
      ></AnswerGroup>
    </Container>
  );
};

export default Category;
