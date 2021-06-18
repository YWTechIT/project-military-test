import React from "react";
import ResultText from "../../typography/ResultText";
import styled from "styled-components";
import PropTypes from 'prop-types';

const DescriptionTitle = styled.h2`
  color: ${(props) => props.theme.HashTag};
  word-break: keep-all;
`;

const Description = ({descriptionTitle, descriptionText}) => {
  return (
    <>
      <DescriptionTitle>{descriptionTitle}</DescriptionTitle>
      <ResultText>{descriptionText}</ResultText>
    </>
  );
};

Description.propTypes = {
  descriptionTitle: PropTypes.string.isRequired,
  descriptionText: PropTypes.string.isRequired
}

export default Description;