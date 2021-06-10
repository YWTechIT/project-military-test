import React from "react";
import styled from "styled-components";

const ProgressBarContainer = styled.div`
  display: flex;
  text-align: center;
  margin: 12px 10px;
  box-sizing: border-box;
`;

const ProgressName = styled.div`
  width: 25%;
  font-weight: bold;
  margin-left: 14px;
`;

const GageContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

`;

const Gage = styled.div`
  height: 12px;
  width: 86%;
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
