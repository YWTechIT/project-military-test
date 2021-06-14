import React from "react";
import styled from "styled-components";
import StyledLink from "../../typography/styledLink";

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

const CardBoxTitle = styled.h2`
  color: ${(props) => props.theme.HashTag};
  word-break: keep-all;
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
        <CardBoxTitle>{children}</CardBoxTitle>
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
