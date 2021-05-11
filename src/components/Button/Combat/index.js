import React from "react";
import ButtonStyle from "../../ButtonStyle";

const CombatButton = ({ handleClick, answer }) => {
  return (
    <ButtonStyle
      key={answer.text}
      text={answer.text}
      onClick={() => handleClick(answer.short, answer.long)}
    >
      {answer.text}
    </ButtonStyle>
  );
};

export default CombatButton;
