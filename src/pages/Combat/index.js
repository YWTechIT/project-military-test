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
    const infantry = answer.infantry;
    const artillery = answer.artillery;
    const armor = answer.armor;
    const engineer = answer.engineer;
    const signal = answer.signal;
    const intelligence = answer.intelligence;

    setScore((score) => ({
      ...score,
      combat: {
        infantryScore: score.combat.infantryScore + infantry,
        artilleryScore: score.combat.artilleryScore + artillery,
        armorScore: score.combat.armorScore + armor,
        engineerScore: score.combat.engineerScore + engineer,
        signalScore: score.combat.signalScore + signal,
        intelligenceScore: score.combat.intelligenceScore + intelligence,
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
