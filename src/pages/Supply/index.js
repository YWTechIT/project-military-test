import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AnswerGroup from "../../components/AnswerGroup";
import Container from "../../components/Container";
import Question from "../../components/Question";
import { SUPPLY_QUIZ } from "./Constant";


const Supply = ({ score, setScore }) => {
  let history = useHistory();
  const [currentNo, setCurrentNo] = useState(0);

  const supplyScore = ({ affair, medic, weapon, police, pray, band }) => {
    const {supply: {affairScore, medicScore, weaponScore, policeScore, prayScore, bandScore}} = score;

    setScore((score) => ({
      ...score,
      supply: {
        affairScore: affairScore + affair,
        medicScore: medicScore + medic,
        weaponScore: weaponScore + weapon,
        policeScore: policeScore + police,
        prayScore: prayScore + pray,
        bandScore: bandScore + band,
      },
    }));

    if (currentNo === SUPPLY_QUIZ.length - 1) {
      history.push("/result");
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
