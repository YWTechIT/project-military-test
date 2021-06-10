import React from "react";
import styled from "styled-components";
import ResultText from "../ResultText";
import ResultTitle from "../ResultTitle";
import StyledLink from "../StyledLink";

const CardBoxFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardBoxImg = styled.img`
  margin-bottom: 12px;
  @media screen and (min-width: 600px) {
    width: 50%;
  }
`;

const CardBox = ({ cardBoxLink, cardBoxICON, cardBoxName, children }) => {
  return (
    <>
      <CardBoxFlex>
        <ResultTitle>{children}</ResultTitle>
        <StyledLink to={cardBoxLink}>
          <CardBoxImg src={cardBoxICON}></CardBoxImg>
          <ResultText>{cardBoxName}</ResultText>
        </StyledLink>
      </CardBoxFlex>
    </>
  );
};

export default CardBox;
