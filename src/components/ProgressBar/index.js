import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  display: flex;
  text-align: center;
  margin: 10px 0px;
  box-sizing: border-box;
  min-width: 0px;
`;

const ProgressName = styled.div`
  width: 25%;
`;

const GageContainer = styled.div`
  display: flex;
  width: 75%;
  align-items: center;
  margin: 0px 30px;
`;

const Gage = styled.div`
  height: 10px;
  width: 100%;
  background-color: lightgray;
  border-radius: 50px;
`;

const GageFiller = styled.div`
  height: 100%;
  width: ${(props) => props.percent}%;
  background-color: #04a686;
  border-radius: inherit;
`;

const ProgressBar = (props) => {
  const { name, percent } = props;

  return (
    <ProgressBarContainer>
      <ProgressName>{name}</ProgressName>
      <GageContainer>
        <Gage>
          <GageFiller percent={percent} />
        </Gage>
      </GageContainer>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
