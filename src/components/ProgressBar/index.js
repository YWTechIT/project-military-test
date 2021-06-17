import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';

const ProgressBarContainer = styled.div`
  display: flex;
  margin: 12px 10px;
  text-align: center;
  align-items: center;
`;

const ProgressBarName = styled.div`
  width: 25%;
  font-weight: bold;
  margin-left: 14px;
  @media screen and (min-width: 600px){
    font-size: 18px;
  }
`;

const GageContainer = styled.div`
  width: 75%;
`;

const Gage = styled.div`
  height: 12px;
  width: 100%;
  background-color: ${(props) => props.theme.ProgressBarBg};
  border-radius: 50px;
  @media screen and (min-width: 600px){
    height: 16px;
  }
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
      <ProgressBarName>{name}</ProgressBarName>
      <GageContainer>
        <Gage>
          <GageFiller percent={percent} />
        </Gage>
      </GageContainer>
    </ProgressBarContainer>
  );
};

ProgressBar.propTypes = {
  name: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired
}

export default ProgressBar;
