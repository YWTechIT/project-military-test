import styled from "styled-components";
import { useScript } from "../../hooks";
import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
} from "react-share";
import { useEffect } from "react";
import kakaoLogo from "../../assets/kakao_logo.jpg";
import URLIconImg from '../../assets/URLIcon.jpg'

const GroupContainer = styled.div``;

const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  margin: 10px 0px 14px 0px;
  @media screen and (min-width: 600px) {
    font-size: 24px;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 14px;
  margin-bottom: 20px;
  justify-items: center;
`;

const URLShareButton = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 22px;
  border: 0px;
  cursor: pointer;
`;

const URLIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 22px;
`

const KakaoShareButton = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 22px;
  border: 0px;
  cursor: pointer;
`;

const KakaoIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 22px;
`;

const SocialButtonGroup = () => {
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
  const currentUrl = window.location.href;
  const initUrl = "https://ywtechmilitarytest.site";
  const imageUrl =
    "https://ywtechmilitarytest.site/static/media/landing.73faa41f.jpg";
  const kakao = window.Kakao;

  const handleKakaoButton = () => {
    kakao.Link.sendDefault({
      objectType: "feed",
      content: {
        title: "병무청 서버 해킹으로 입영기록이 사라졌다.. 😅 😅",
        description: "나는 어떤 병과를 갈까?",
        imageUrl: imageUrl,
        link: {
          webUrl: currentUrl,
          mobileWebUrl: currentUrl,
        },
      },
      buttons: [
        {
          title: "나도 테스트 해보기",
          link: {
            webUrl: initUrl,
            mobileWebUrl: initUrl,
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
    <GroupContainer>
      <Title>결과 공유하기</Title>
      <GridContainer>
        <URLShareButton>
          <URLIcon src={URLIconImg}></URLIcon>
        </URLShareButton>
        <KakaoShareButton onClick={handleKakaoButton}>
          <KakaoIcon src={kakaoLogo}></KakaoIcon>
        </KakaoShareButton>
        <FacebookShareButton url={currentUrl}>
          <FacebookIcon size={48} round={true} borderRadius={22}></FacebookIcon>
        </FacebookShareButton>
        <LineShareButton url={currentUrl}>
          <LineIcon size={48} round={true} borderRadius={22}></LineIcon>
        </LineShareButton>
      </GridContainer>
    </GroupContainer>
  );
};

export default SocialButtonGroup;
