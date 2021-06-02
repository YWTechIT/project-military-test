import styled from "styled-components";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FacebookShareButton,
  FacebookIcon,
  LineShareButton,
  LineIcon,
} from "react-share";

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

const SocialButtonGroup = () => {
  const currentUrl = window.location.href;
  return (
    <GridContainer>
      <CopyToClipboard text={currentUrl}>
        <URLShareButton>URL</URLShareButton>
      </CopyToClipboard>
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
