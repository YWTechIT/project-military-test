import React from "react";
import styled from "styled-components";

const DescriptionHashTag = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme.hashTag};
  font-size: 20px;
  margin-bottom: 14px;
  text-align: center;
`;

const DescriptionText = styled.div`
  font-size: 18px;
  text-align: left;
  line-height: 1.66em;
  margin-left: 6px;
  margin-right: 6px;
`;

const Description = ({descriptionHashTag, descriptionText}) => {
  return (
    <>
      <DescriptionHashTag>{descriptionHashTag}</DescriptionHashTag>
      <DescriptionText>{descriptionText}</DescriptionText>
    </>
  );
};

export default Description;