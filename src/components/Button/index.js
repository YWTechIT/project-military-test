import React from "react";
import styled from "styled-components";
import StyledLink from "../../typography/styledLink";

const StyledButton = styled.button`
  width: 80%;
  font-size: 18px;
  color: #ffffff;
  background-color: ${(props) => props.theme.primaryColor100};
  border-radius: 10px;
  border: 0px;
  padding: 4px 8px 4px 8px;
  height: 60px;
  margin-bottom: 10px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  line-height: 150%;
  word-break: keep-all;
  &:hover {
    background-color: ${(props) => props.theme.primaryColor80};
  }
  @media screen and (min-width: 600px){
    font-size: 21px;
    height: 70px;
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