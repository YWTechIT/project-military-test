import React from "react";
import styled from "styled-components";
import ResultText from "../ResultText";
import ResultTitle from "../ResultTitle";
import StyledLink from "../StyledLink";

const OtherInstanceFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OtherInstanceImg = styled.img`
  // align-items: center;
`;

const OtherInstance = ({ otherInstanceLink, otherInstanceICON, otherInstanceName, children }) => {
  return (
    <>
      <OtherInstanceFlex>
        <ResultTitle>{children}</ResultTitle>
        <StyledLink to = {otherInstanceLink}>
          <OtherInstanceImg src={otherInstanceICON}></OtherInstanceImg>
        </StyledLink>
        <ResultText>{otherInstanceName}</ResultText>
      </OtherInstanceFlex>
    </>
  );
};

export default OtherInstance;
