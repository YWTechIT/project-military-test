import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  width: ${(props) => props.isResultPage === undefined ? '70%' : '88%'};
  border-radius: 16px;
  opacity: ${(props) => props.loading ? 0.8 : 1};
  transition: opacity 0.15s linear;
  margin: ${(props) => props.isResultPage === undefined ? '8px' : '0px 8px 16px 8px'};
  @media screen and (min-width: 600px) {
    width: ${(props) => props.isResultPage === undefined ? '' : '96%'};
  }
`;

const BlurredUpImg = React.memo(({ src, placeholder, alt, queryId }) => {

  const [loading, setLoading] = useState(+true);
  const [currentSrc, setCurrentSrc] = useState(placeholder);

  useEffect(() => {
    // start loading origin image
    const loadImage = new Image();
    loadImage.src = src;

    loadImage.onload = () => {
      // when image is loaded replace the src and set loading to false;
      setLoading(+false);
      setCurrentSrc(src);
    };
  }, [src]);

  return (
    <StyledImg src={currentSrc} loading={loading} alt = {alt} isResultPage = {queryId}></StyledImg>
  );
});

export default BlurredUpImg;
