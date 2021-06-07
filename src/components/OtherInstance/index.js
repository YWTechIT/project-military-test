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
  max-width: 50%;
  margin-bottom: 4px;
  &:hover {
    background-color: ${(props) => props.theme.primaryColor30};
  }
`;

const OtherInstance = ({ otherLink, otherInstanceICON, otherInstanceText, children }) => {
  return (
    <>
      <OtherInstanceFlex>
        <ResultTitle>{children}</ResultTitle>
        <StyledLink to = {otherLink}>
          <OtherInstanceImg src={otherInstanceICON}></OtherInstanceImg>
        </StyledLink>
        <ResultText>{otherInstanceText}</ResultText>
      </OtherInstanceFlex>
    </>
  );
};

export default OtherInstance;
