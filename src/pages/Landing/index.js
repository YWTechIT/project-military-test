import React from "react";
import styled from "styled-components";
import landing from "../../assets/landing.jpg";
import Button from "../../components/Button";
import Container from "../../components/Container";

const StyledImage = styled.img`
  border-radius: 10px;
  margin: 12px;
  max-width: 70%;
  display: block;
`;

const Text = styled.div`
  width: 78%;
  font-size: 15px;
  margin: 8px 0px 20px;
  line-height: 130%;
  @media screen and (min-width: 600px){
    font-size: 18px;
  }
`;

const Landing = () => {
  return (
    <>
      <Container>
        <h1>내가 재입대를 하게 된다면?</h1>
        <h3>나에게 어울리는 병과는 무엇일까?</h3>
        <StyledImage src={landing} alt="landing"></StyledImage>
        <Text>
          2040년 2월 16일, 병무청 서버 해킹으로 인해 입영기록이 통째로 삭제됐다. 어느날
          병무청에서 이런 문자가 온다면.. 나는 어떤 병과를 선택할까?
        </Text>
        <Button to="/category">테스트 시작 하기</Button>
      </Container>
    </>
  );
};

export default Landing;
