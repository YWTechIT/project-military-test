import React from "react";
import ButtonStyle from "..";

const SupplyButton = ({ answer, handleClick }) => {
  return (
    <ButtonStyle
      key={answer.text}
      text={answer.text}
      onClick={() =>
        handleClick(
          answer.affair,
          answer.medic,
          answer.weapon,
          answer.police,
          answer.pray,
          answer.band
        )
      }
    >
      {answer.text}
    </ButtonStyle>
  );
};

export default SupplyButton;
