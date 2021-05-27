import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import landing from "../../assets/landing.jpg";
import Button from "../../components/Button";
import Container from "../../components/Container";

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-top: 15px;
  text-align: center;
  color: ${(props) => props.theme.primaryColor100};
`;

const SubTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-top: -12px;
  margin-bottom: 18px;
  text-align: center;
  color: ${(props) => props.theme.gray80};
`;

const StyledImage = styled.img`
  border-radius: 16px;
  margin-bottom: 16px;
  max-width: 70%;
  display: block;
`;

const Text = styled.div`
  width: 46vh;
  font-size: 16px;
  margin: 0px 10px 12px 10px;
`;

const Landing = () => {
  return (
    <>
      <Container>
        <Title>병과 테스트</Title>
        <SubTitle>나와 잘 맞는 병과는 무엇일까?</SubTitle>
        <StyledImage src={landing} alt="landing"></StyledImage>
          <Text>
            2040년, 병무청 서버 해킹으로 인해 입영기록이 통째로 날라갔다. 어느날
            SNS에서 이런 문자가 날라온다면.. 나는 어떤 병과를 선택할까?
          </Text>
          <Link to="/category">
            <Button>테스트 시작 하기</Button>
          </Link>
      </Container>
    </>
  );
};

export default Landing;
