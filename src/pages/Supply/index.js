import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AnswerGroup from "../../components/AnswerGroup";
import Container from "../../components/Container";
import Question from "../../components/Question";
import { SUPPLY_QUIZ } from "./Constant";

const Supply = ({ score, setScore }) => {
  let history = useHistory();
  const [currentNo, setCurrentNo] = useState(0);

  const supplyScore = (answer) => {
    const affair = answer.affair;
    const medic = answer.medic;
    const weapon = answer.weapon;
    const police = answer.police;
    const pray = answer.pray;
    const band = answer.band;

    setScore((score) => ({
      ...score,
      supply: {
        affairScore: score.supply.affairScore + affair,
        medicScore: score.supply.medicScore + medic,
        weaponScore: score.supply.weaponScore + weapon,
        policeScore: score.supply.policeScore + police,
        prayScore: score.supply.prayScore + pray,
        bandScore: score.supply.bandScore + band,
      },
    }));

    if (currentNo === SUPPLY_QUIZ.length - 1) {
      history.push("/loading");
    } else {
      setCurrentNo((currentNo) => currentNo + 1);
    }
  };

  return (
    <Container>
      <Question QUIZZES={SUPPLY_QUIZ} currentNo={currentNo}></Question>
      <AnswerGroup
        QUIZZES={SUPPLY_QUIZ}
        currentNo={currentNo}
        handleClick={supplyScore}
      ></AnswerGroup>
    </Container>
  );
};

export default Supply;
