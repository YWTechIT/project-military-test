import React from "react";
import styled from "styled-components";
import ResultTitle from "../ResultTitle";
import StyledLink from "../StyledLink";

const CardBoxFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImgContainer = styled.div`
  text-align: center;
  width: 100%;
`;

const CardBoxImg = styled.img`
  margin: 12px 0px;
  @media screen and (min-width: 600px) {
    width: 50%;
  }
`;

const CardBoxText = styled.div`
  font-size: 16px;
  @media screen and (min-width: 600px) {
    font-size: 20px;
  }
`;

const CardBox = ({ cardBoxLink, cardBoxICON, cardBoxName, children }) => {
  return (
    <>
      <CardBoxFlex>
        <ResultTitle>{children}</ResultTitle>
        <ImgContainer>
          <StyledLink to={cardBoxLink}>
            <CardBoxImg src={cardBoxICON}></CardBoxImg>
            <CardBoxText>{cardBoxName}</CardBoxText>
          </StyledLink>
        </ImgContainer>
      </CardBoxFlex>
    </>
  );
};

export default CardBox;
