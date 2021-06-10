import React from "react";
import styled from "styled-components";
import landing from "../../assets/landing.jpg";
import Button from "../../components/Button";
import Container from "../../components/Container";

const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  margin: 4px;
  color: black;
`;

const SubTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 4px;
  text-align: center;
  color: ${(props) => props.theme.gray80};
`;

const StyledImage = styled.img`
  border-radius: 16px;
  margin: 12px;
  max-width: 70%;
  display: block;
`;

const Text = styled.div`
  width: 74%;
  font-size: 16px;
  margin: 8px;
`;

const Landing = () => {
  return (
    <>
      <Container>
        <Title>내가 재입대를 하게 된다면?</Title>
        <SubTitle>나에게 어울리는 병과는 무엇일까?</SubTitle>
        <StyledImage src={landing} alt="landing"></StyledImage>
        <Text>
          2040년, 병무청 서버 해킹으로 인해 입영기록이 통째로 날아갔다. 어느날
          SNS에서 이런 문자가 날라온다면.. 나는 어떤 병과를 선택할까?
        </Text>
        <Button to="/category">테스트 시작 하기</Button>
      </Container>
    </>
  );
};

export default Landing;
