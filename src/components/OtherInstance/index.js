import React from "react";
import styled from "styled-components";

const OtherInstanceContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OtherInstanceTitle = styled.p`
  color: ${(props) => props.theme.hashTag};
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

const OtherInstanceImg = styled.img`
  max-width: 50%;
  margin-bottom: 4px;
`;

const OtherInstanceText = styled.p`
  color: black;
  font-weight: bold;
  font-size: 20px;
`;

const OtherInstance = ({ otherInstanceICON, otherInstanceText, children }) => {
  return (
    <>
      <OtherInstanceContent>
        <OtherInstanceTitle>{children}</OtherInstanceTitle>
        <OtherInstanceImg src={otherInstanceICON}></OtherInstanceImg>
        <OtherInstanceText>{otherInstanceText}</OtherInstanceText>
      </OtherInstanceContent>
    </>
  );
};

export default OtherInstance;
