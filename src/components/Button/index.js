import React from 'react';
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 18px;
  color: #ffffff;
  background-color: ${(props) => props.theme.primaryColor100};
  border-radius: 5px;
  border: 0px;
  padding: 4px;
  height: 64px;
  margin-bottom: 8px;
  cursor: pointer;
  width: 46vh;
  outline: none;
  font-weight: 700;
  &:hover {
    background-color: ${(props) => props.theme.primaryColor80};
  }
`;

const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>
}

export default Button;