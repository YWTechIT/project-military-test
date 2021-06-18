import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useScript } from "../../hooks";
import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
} from "react-share";
import { useEffect } from "react";
import kakaoLogo from "../../assets/kakao_logo.jpg";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 48px);
  justify-content: center;
  grid-column-gap: 8px;
  margin-bottom: 20px;
`;

const URLShareButton = styled.button`
  width: 48px;
  height: 48px;
  color: white;
  border-radius: 24px;
  border: 0px;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  background-color: ${(props) => props.theme.primaryColor100};
  &:hover {
    background-color: ${(props) => props.theme.primaryColor80};
  }
`;

const KakaoShareButton = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  border: 0px;
  cursor: pointer;
`;

const KakaoIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  margin: 10px 0px 14px 0px;
  @media screen and (min-width: 600px) {
    font-size: 24px;
  }
`;

const SocialButtonGroup = () => {
  const currentUrl = window.location.href;
  const url = 'https://ywtechmilitarytest.site/';
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
  const kakao = window.Kakao;

  const handleKakaoButton = () => {
    kakao.Link.sendDefault({
      objectType: "feed", // 메시지 형식 : 피드 타입
      content: {
        title: "내가 재입대를 하게 된다면..",
        description: "나와 가장 잘 어울리는 병과는?",
        imageUrl: "이미지 주소", // 메인으로 보여질 이미지 주소
        link: {
          webUrl: currentUrl,
          mobileWebUrl: currentUrl,
        },
      },
      buttons: [
        {
          title: "나도 테스트 해보기", // 버튼 이름
          link: {
            webUrl: url,
            mobileWebUrl: url,
          },
        },
      ],
    });
  };

  useEffect(() => {
    if (status === "ready" && kakao) {
      if (!kakao.isInitialized()) {
        kakao.init("2ca911f4d06608b5899e39f80a083215");
      }
    }
  }, [status, kakao]);
  

  return (
    <FlexContainer>
      <Title>결과 공유하기</Title>
      <GridContainer>
        <CopyToClipboard text={currentUrl}>
          <URLShareButton>URL</URLShareButton>
        </CopyToClipboard>
        <KakaoShareButton onClick={handleKakaoButton}>
          <KakaoIcon src={kakaoLogo}></KakaoIcon>
        </KakaoShareButton>
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
        </FacebookShareButton>
        <LineShareButton url={currentUrl}>
          <LineIcon size={48} round={true} borderRadius={24}></LineIcon>
        </LineShareButton>
      </GridContainer>
    </FlexContainer>
  );
};

export default SocialButtonGroup;
