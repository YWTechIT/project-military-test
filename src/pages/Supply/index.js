import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SupplyAnswer from "../../components/Answer/Supply";
import Container from "../../components/Container";
import Question from "../../components/Question";
import { SUPPLY_QUIZ } from "./Constant";

const Supply = ({ score, setScore }) => {
  let history = useHistory();
  const [supplyCurrentNo, setSupplyCurrentNo] = useState(0);

  const supplyHandleClick = (affair, medic, weapon, police, pray, band) => {
    if (supplyHandleClick) {
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
    }

    if (supplyCurrentNo === SUPPLY_QUIZ.length - 1) {
      history.push("/loading");
    } else {
      setSupplyCurrentNo((supplyCurrentNo) => supplyCurrentNo + 1);
    }
  };

  return (
    <Container>
      <Question QUIZZES={SUPPLY_QUIZ} currentNo={supplyCurrentNo}></Question>
      <SupplyAnswer
        QUIZZES={SUPPLY_QUIZ}
        currentNo={supplyCurrentNo}
        handleClick={supplyHandleClick}
      ></SupplyAnswer>
    </Container>
  );
};

export default Supply;
