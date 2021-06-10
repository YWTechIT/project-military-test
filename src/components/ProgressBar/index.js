import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  display: flex;
  text-align: center;
  margin: 12px 0px;
  box-sizing: border-box;
  width: 100%;

`;

const ProgressName = styled.div`
  width: 25%;
  font-weight: bold;
  margin-left: 15px;
`;

const GageContainer = styled.div`
  display: flex;
  width: 75%;
  align-items: center;
  margin: 0px 40px 0px 0px;
`;

const Gage = styled.div`
  height: 12px;
  width: 100%;
  background-color: ${(props) => props.theme.ProgressBarBg};
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
