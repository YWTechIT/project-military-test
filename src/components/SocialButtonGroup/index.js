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
  grid-column-gap: 8px;
  justify-content: center;
  margin-bottom: 16px;
`;

const URLShareButton = styled.button`
  width: 48px;
  height: 48px;
  color: white;
  border-radius: 24px;
  border: 0px;
  font-weight: 800;
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
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
`;

const KakaoIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

const SocialButtonGroup = () => {
  const currentUrl = window.location.href;
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");
  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });
  };
  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init("2ca911f4d06608b5899e39f80a083215");
      }
    }
  }, [status]);

  return (
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
  );
};

export default SocialButtonGroup;
