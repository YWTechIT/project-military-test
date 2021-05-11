import React from "react";
import ButtonStyle from '../';

const CategoryButton = ({ handleClick, answer }) => {
  return (
    <ButtonStyle
      key={answer.text}
      text={answer.text}
      onClick={() => handleClick(answer.combat, answer.supply)}
    >
      {answer.text}
    </ButtonStyle>
  );
};

export default CategoryButton;
