import React, { useState } from "react";
import Question from "../../components/Question";
import Container from "../../components/Container";
import { useHistory } from "react-router-dom";
import { COMBAT_QUIZ } from "./Constant";
import CombatAnswer from "../../components/Answer/Combat";

const Combat = ({ score, setScore }) => {
  let history = useHistory();
  const [combatCurrentNo, setCombatCurrentNo] = useState(0);

  const combatHandleClick = (short, long) => {
    if (combatHandleClick) {
      setScore((score) => ({
        ...score,
        combat: {
          shortScore: score.combat.shortScore + short,
          longScore: score.combat.longScore + long,
        },
      }));
    }
    if (combatCurrentNo === COMBAT_QUIZ.length - 1) {
      history.push("/loading");
    } else {
      setCombatCurrentNo((combatCurrentNo) => combatCurrentNo + 1);
    }
  };

  return (
    <Container>
      <Question QUIZZES={COMBAT_QUIZ} currentNo={combatCurrentNo}></Question>
      <CombatAnswer
        QUIZZES={COMBAT_QUIZ}
        currentNo={combatCurrentNo}
        handleClick={combatHandleClick}
      ></CombatAnswer>
    </Container>
  );
};

export default Combat;
