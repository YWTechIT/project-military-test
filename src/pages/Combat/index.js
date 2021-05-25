import React, { useState } from "react";
import Question from "../../components/Question";
import Container from "../../components/Container";
import { useHistory } from "react-router-dom";
import { COMBAT_QUIZ } from "./Constant";
import AnswerGroup from "../../components/AnswerGroup";

const Combat = ({ score, setScore }) => {
  let history = useHistory();
  const [currentNo, setCurrentNo] = useState(0);

  const COMBAT_SCORE = {
    infantryScore: score.combat.infantryScore,
    artilleryScore: score.combat.artilleryScore,
    armorScore: score.combat.armorScore,
    engineerScore: score.combat.engineerScore,
    signalScore: score.combat.signalScore,
    intelligenceScore: score.combat.intelligenceScore,
  };

  const combatScore = ({ infantry, artillery, armor, engineer, signal, intelligence, }) => {
    const infantryScore = COMBAT_SCORE.infantryScore;
    const artilleryScore = COMBAT_SCORE.artilleryScore;
    const armorScore = COMBAT_SCORE.armorScore;
    const engineerScore = COMBAT_SCORE.engineerScore;
    const signalScore = COMBAT_SCORE.signalScore;
    const intelligenceScore = COMBAT_SCORE.intelligenceScore;

    setScore((score) => ({
      ...score,
      combat: {
        infantryScore: infantryScore + infantry,
        artilleryScore: artilleryScore + artillery,
        armorScore: armorScore + armor,
        engineerScore: engineerScore + engineer,
        signalScore: signalScore + signal,
        intelligenceScore: intelligenceScore + intelligence,
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
