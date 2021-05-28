import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AnswerGroup from "../../components/AnswerGroup";
import Container from "../../components/Container";
import Question from "../../components/Question";
import { CATEGORIZE_QUIZ } from "./Constant";

const Category = ({ score, setScore }) => {
  let history = useHistory();
  const [currentNo, setCurrentNo] = useState(0);
  
  const categoryScore = ({ combat, supply }) => {
    const {category: {combatScore, supplyScore}} = score;

    setScore((score) => ({
      ...score,
      category: {
        combatScore: combatScore + combat,
        supplyScore: supplyScore + supply,
      },
    }));

    if (currentNo === CATEGORIZE_QUIZ.length - 1) {
      if (combatScore >= supplyScore) {
        history.push("/combat");
      } else {
        history.push("/supply");
      }
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
        handleClick={categoryScore}
      ></AnswerGroup>
    </Container>
  );
};

export default Category;
