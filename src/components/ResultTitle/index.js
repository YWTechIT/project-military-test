import styled from "styled-components";

const ResultTitle = styled.h2`
  color: ${(props) => props.theme.HashTag};
  font-size: 20px;
  margin: 10px 5px 14px 5px;
  text-align: center;
  word-break: keep-all;
  @media screen and (min-width: 600px){
    font-size: 24px;
  }
`;

export default ResultTitle;