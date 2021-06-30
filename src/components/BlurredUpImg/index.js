import React, { useEffect, useState } from "react";

const BlurredUpImg = React.memo(({ src, placeholder, alt }) => {
  const [loading, setLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(placeholder);

  useEffect(() => {
    // start loading origin image
    const loadImage = new Image();
    loadImage.src = src;

    loadImage.onload = () => {
      // when image is loaded replace the src and set loading to false;
      setLoading(false);
      setCurrentSrc(src);
    };
  }, [src]);

  return (
    <img
      src={currentSrc}
      style={{
        width: "70%",
        opacity: loading ? 0.5 : 1,
        transition: "opacity 0.15s linear",
        borderRadius: "10px",
        margin: "12px",
      }}
      alt={alt}
    />
  );
});

export default BlurredUpImg;
