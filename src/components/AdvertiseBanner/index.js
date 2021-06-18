import React from "react";
import styled from "styled-components";

const AdvertisedBannerStyle = styled.div`
  text-align: center;
  width: 100%;
  margin: 20px 10px 0px 10px;
`;

const AdvertiseBanner = () => {
  return (
    <AdvertisedBannerStyle>
      <iframe
        title="dynamicBanner1"
        src="https://ads-partners.coupang.com/widgets.html?id=491881&template=carousel&trackingCode=AF9262326&subId=&width=320&height=100"
        frameBorder="0"
        scrolling="no"
        referrerPolicy="unsafe-url"
        style={{ maxWidth: 90 + "%" }}
      ></iframe>
      <iframe
        title="dynamicBanner2"
        src="https://ads-partners.coupang.com/widgets.html?id=491881&template=carousel&trackingCode=AF9262326&subId=&width=320&height=100"
        frameBorder="0"
        scrolling="no"
        referrerPolicy="unsafe-url"
        style={{ maxWidth: 90 + "%" }}
      ></iframe>
    </AdvertisedBannerStyle>
  );
};

export default AdvertiseBanner;