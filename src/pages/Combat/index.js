import React, { useState } from "react";
import Question from "../../components/Question";
import Container from "../../components/Container";
import { useHistory } from "react-router-dom";
import { COMBAT_QUIZ } from "./Constant";
import AnswerGroup from "../../components/AnswerGroup";

const Combat = ({ score, setScore }) => {
  let history = useHistory();
  const [currentNo, setCurrentNo] = useState(0);

  const combatScore = ({
    infantry,
    artillery,
    armor,
    engineer,
    signal,
    intelligence,
  }) => {

    const {
      combat: { infantry: originInfantry, artillery: originArtillery, armor: originArmor, engineer: originEngineer, signal: originSignal, intelligence: originIntelligence, }
      } = score;

    setScore((score) => ({
      ...score,
      combat: {
        infantry: originInfantry + infantry,
        artillery: originArtillery + artillery,
        armor: originArmor + armor,
        engineer: originEngineer + engineer,
        signal: originSignal + signal,
        intelligence: originIntelligence + intelligence,
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
