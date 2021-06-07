import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  width: 100%;
  text-align: center;
  margin: 8px;
`;

const StyledButton = styled.button`
  width: 80%;
  font-size: 18px;
  color: #ffffff;
  background-color: ${(props) => props.theme.primaryColor100};
  border-radius: 5px;
  border: 0px;
  padding: 4px;
  height: 64px;
  margin-bottom: 8px;
  cursor: pointer;
  outline: none;
  font-weight: 700;
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