import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  &:hover {
    background-color: ${(props) => props.theme.primaryColor30};
  }
`;

const OtherInstanceText = styled.p`
  color: black;
  font-size: 20px;
`;

const ImageLink = styled(Link)`
  width: 100%;
  text-align: center;
  margin: 8px;

`;

const OtherInstance = ({ otherLink, otherInstanceICON, otherInstanceText, children }) => {
  return (
    <>
      <OtherInstanceContent>
        <OtherInstanceTitle>{children}</OtherInstanceTitle>
        <ImageLink to = {otherLink}>
          <OtherInstanceImg src={otherInstanceICON}></OtherInstanceImg>
        </ImageLink>
        <OtherInstanceText>{otherInstanceText}</OtherInstanceText>
      </OtherInstanceContent>
    </>
  );
};

export default OtherInstance;
