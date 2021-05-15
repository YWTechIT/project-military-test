import React, { useState } from "react";
import Question from "../../components/Question";
import Container from "../../components/Container";
import { useHistory } from "react-router-dom";
import { COMBAT_QUIZ } from "./Constant";
import AnswerGroup from "../../components/AnswerGroup";

const Combat = ({ setScore }) => {
  let history = useHistory();
  const [currentNo, setCurrentNo] = useState(0);

  const combatScore = (answer) => {
    const short = answer.short;
    const long = answer.long;

    setScore((score) => ({
      ...score,
      combat: {
        shortScore: score.combat.shortScore + short,
        longScore: score.combat.longScore + long,
      },
    }));

    if (currentNo === COMBAT_QUIZ.length - 1) {
      history.push("/loading");
    } else {
      setCurrentNo((currentNo) => currentNo + 1);
    }
  };

  return (
    <Container>
      <Question QUIZZES={COMBAT_QUIZ} currentNo={currentNo}></Question>
      <AnswerGroup
        QUIZZES={COMBAT_QUIZ}
        currentNo={currentNo}
        handleClick={combatScore}
      ></AnswerGroup>
    </Container>
  );
};

export default Combat;
