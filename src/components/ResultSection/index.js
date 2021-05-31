import React from "react";
import styled from "styled-components";

const SectionTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-top: 0px;
  margin-bottom: 32px;
  text-align: center;
`;

// const StyledImage = styled.img`
//   display: block;
//   border-radius: 16px;
//   opacity: 95%;
//   margin-bottom: 4px;
//   max-width: 100%;
// `;

// const Source = styled.p`
//   margin-top: 4px;
// `;

const ResultSection = ({ maxKey }) => {
  return (
    <>
      <SectionTitle>당신은 혹시... {maxKey}</SectionTitle>
      <p>params image</p>
    </>
  );
};

export default ResultSection;
