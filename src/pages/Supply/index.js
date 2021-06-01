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
    const {
      supply: {
        affair,
        medic,
        weapon,
        police,
        pray,
        band,
      },
    } = score;

    const {
      affair: gainAffair,
      medic: gainMedic,
      weapon: gainWeapon,
      police: gainPolice,
      pray: gainPray,
      band: gainBand,
    } = answer;

    setScore((score) => ({
      ...score,
      supply: {
        affair: affair + gainAffair,
        medic: medic + gainMedic,
        weapon: weapon + gainWeapon,
        police: police + gainPolice,
        pray: pray + gainPray,
        band: band + gainBand,
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
