import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import CategoryAnswer from "../../components/Answer/Category";
import Container from "../../components/Container";
import Question from "../../components/Question";
import { CATEGORIZE_QUIZ } from "./Constant";

const Category = ({ score, setScore }) => {
  let history = useHistory();
  const [categoryCurrentNo, setCategoryCurrentNo] = useState(0);

  const categoryHandleClick = (combat, supply) => {
    if (categoryHandleClick) {
      setScore((score) => ({
        ...score,
        category: {
          combatScore: score.category.combatScore + combat,
          supplyScore: score.category.supplyScore + supply,
        },
      }));
    }
    if (categoryCurrentNo === CATEGORIZE_QUIZ.length - 1) {
      history.push("/loading");
    } else {
      setCategoryCurrentNo((categoryCurrentNo) => categoryCurrentNo + 1);
    }
  };
  
  return (
    <Container>
      <Question
        QUIZZES={CATEGORIZE_QUIZ}
        currentNo={categoryCurrentNo}
      ></Question>
      <CategoryAnswer
        QUIZZES={CATEGORIZE_QUIZ}
        currentNo={categoryCurrentNo}
        handleClick={categoryHandleClick}
      ></CategoryAnswer>
    </Container>
  );
};

export default Category;
