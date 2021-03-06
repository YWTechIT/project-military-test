import React, { useEffect } from "react";
import favicon from "../../assets/favicon.ico";
import landing from "../../assets/landing.jpg";
import styled from "styled-components";
import Button from "../../components/Button";
import Container from "../../components/Container";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga";
import BlurredUpImg from "../../components/BlurredUpImg";
import {landingLow} from '../../constant/LOW_IMAGE_SRC';

const Text = styled.div`
  width: 78%;
  font-size: 15px;
  margin: 8px 0px 20px;
  line-height: 130%;
  @media screen and (min-width: 600px) {
    font-size: 18px;
  }
`;

const Landing = () => {
  const currentUrl = document.location.href;

  useEffect(() => {
    ReactGA.initialize("UA-199545771-1");
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>병과 성향 테스트</title>
          <link rel="icon" href={favicon} />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta property="og:url" content={currentUrl} />
          <meta property="og:title" content="병과 성향 테스트 하기" />
          <meta
            property="og:description"
            content="내가 재입대를 하게 된다면 나와 잘 어울리는 병과는 무엇일까?"
          />
          <meta property="og:image" content={landing} />

          <meta property="twitter:title" content="병과 성향 테스트 하기" />
          <meta
            property="twitter:description"
            content="내가 재입대를 하게 된다면 나와 잘 어울리는 병과는 무엇일까?"
          />
          <meta property="twitter:image" content={landing} />
        </Helmet>
      </HelmetProvider>
      
      <Container>
        <h1>병과 성향 테스트</h1>
        <h3>나와 잘 어울리는 병과는 무엇일까?</h3>
        <BlurredUpImg src={landing} placeholder={landingLow} alt = {"landing"} />
        <Text>
          2040년 2월 16일, 병무청 서버 해킹으로 인해 입영기록이 통째로 삭제됐다.
          어느날 병무청에서 이런 문자가 온다면.. 나는 어떤 병과를 선택할까?
        </Text>
        <Button to="/category">테스트 시작 하기</Button>
      </Container>
    </>
  );
};

export default Landing;
