import React, { useState } from "react";
import Question from "../../components/Question";
import Container from "../../components/Container";
import { useHistory } from "react-router-dom";
import { COMBAT_QUIZ } from "./Constant";
import AnswerGroup from "../../components/AnswerGroup";

const Combat = ({ score, setScore }) => {
  let history = useHistory();
  const [currentNo, setCurrentNo] = useState(0);

  const combatScore = (answer) => {
    const {
      infantry: gainInfantry,
      artillery: gainArtillery,
      armor: gainArmor,
      engineer: gainEngineer,
      signal: gainSignal,
      intelligence: gainIntelligence,
    } = answer;

    const {
      combat: { infantry, artillery, armor, engineer, signal, intelligence },
    } = score;

    setScore((score) => ({
      ...score,
      combat: {
        infantry: infantry + gainInfantry,
        artillery: artillery + gainArtillery,
        armor: armor + gainArmor,
        engineer: engineer + gainEngineer,
        signal: signal + gainSignal,
        intelligence: intelligence + gainIntelligence,
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
