import React from "react";
import styled from "styled-components";
import StyledLink from "../StyledLink";

const StyledButton = styled.button`
  width: 80%;
  font-size: 18px;
  color: #ffffff;
  background-color: ${(props) => props.theme.primaryColor100};
  border-radius: 10px;
  border: 0px;
  padding: 4px;
  height: 60px;
  margin-bottom: 10px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  line-height: 150%;
  &:hover {
    background-color: ${(props) => props.theme.primaryColor80};
  }
`;

const Button = ({ to, onClick, children }) =>
  to ? (
    <StyledLink to={to}>
      <StyledButton onClick={onClick}>{children}</StyledButton>
    </StyledLink>
  ) : (
    <StyledButton onClick={onClick}>{children}</StyledButton>
  );

export default Button;