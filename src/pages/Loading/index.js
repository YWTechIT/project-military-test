import React, { useEffect, useState } from "react";
import Container from "../../components/Container";
import Spinner from "../../components/Spinner";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Title = styled.h1`
  font-size: 48px;
  @media screen and (min-width: 600px){
    font-size: 54px;
  }
`;

const Loading = ({ cCode, queryStringHash }) => {
  let history = useHistory();
  const [title, setTitle] = useState("결과 분석 중");
  const encodeQuery = encodeURIComponent(queryStringHash);

  useEffect(() => {
    const id = setTimeout(() => {
      setTitle((title) => title + ".");
    }, 700);
    return () => clearTimeout(id);
  }, [title]);

  useEffect(() => {
    setTimeout(() => history.push(`/result/${cCode}?${encodeQuery}`), 2700);
  }, [history, cCode, encodeQuery]);

  return (
    <Container>
      <Title>{title}</Title>
      <Spinner></Spinner>
    </Container>
  );
};

export default Loading;
