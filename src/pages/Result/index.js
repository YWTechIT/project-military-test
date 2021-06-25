import React, { useEffect } from "react";
import favicon from "../../assets/favicon.ico";
import Container from "../../components/Container";
import ResultSection from "../../components/ResultSection";
import Button from "../../components/Button";
import DEFAULT_SCORE from "../../constant/DEFAULT_SCORE";
import { useParams } from "react-router-dom";
import getParseArrayToObj from "../../utility/getParseArrayToObj";
import getChangeParameterName from "../../utility/getChangeParameterName";
import { Helmet, HelmetProvider } from "react-helmet-async";
import RESULT from "../../components/ResultSection/result";
import ReactGA from "react-ga";
import AdvertiseBanner from "../../components/AdvertiseBanner";

const Result = ({ setScore, highScoreObj }) => {
  const { cCode } = useParams();
  const decodeQuery = decodeURIComponent(
    window.location.search.split("?")[1]
  ).split(",");
  const queryObj = getParseArrayToObj(decodeQuery);
  const queryId = getChangeParameterName(highScoreObj, queryObj);
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
          <meta property="og:url" content={currentUrl} />
          <meta property="og:title" content={RESULT[cCode]["ogTitle"]} />
          <meta
            property="og:description"
            content={RESULT[cCode]["ogDescription"]}
          />
          <meta property="og:image" content={RESULT[cCode]["ogImage"]} />

          <meta property="twitter:title" content={RESULT[cCode]["ogTitle"]} />
          <meta
            property="twitter:description"
            content={RESULT[cCode]["ogDescription"]}
          />
          <meta property="twitter:image" content={RESULT[cCode]["ogImage"]} />
        </Helmet>
      </HelmetProvider>

      <Container>
        <ResultSection
          cCode={cCode}
          highScoreObj={highScoreObj}
          queryId={queryId}
        ></ResultSection>
        <Button onClick={() => setScore(DEFAULT_SCORE)} to="/">
          테스트 다시하기
        </Button>

        <AdvertiseBanner />
      </Container>
    </>
  );
};

export default Result;
