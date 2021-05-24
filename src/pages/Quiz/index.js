import React, { useState } from "react";
import getMaxKey from "../../utility/getMaxKey";
import Category from "../Category";
import Combat from "../Combat";
import Supply from "../Supply";
import DEFAULTSCORE from "../../constant/defaultScore";

const Quiz = () => {
  const [score, setScore] = useState(DEFAULTSCORE);
  const categoryKey = getMaxKey(score.category);
  const combatKey = getMaxKey(score.combat);
  const supplyKey = getMaxKey(score.supply);

  return (
    <>
      <Category score={score} setScore={setScore}></Category>
      <Combat score={score} setScore={setScore}></Combat>
      <Supply score={score} setScore={setScore}></Supply>
    </>
  );
};

export default Quiz;
