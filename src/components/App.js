import { Helmet } from 'react-helmet';
import favicon from '../assets/favicon.ico';
import landing from '../assets/landing.jpg';
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import DEFAULT_SCORE from "../constant/DEFAULT_SCORE";
import GlobalStyle from "../globalStyle";
import Category from "../pages/Category";
import Combat from "../pages/Combat";
import Supply from "../pages/Supply";
import theme from "../theme";
import Landing from "../pages/Landing";
import Result from "../pages/Result";
import getMaxValueKey from "../utility/getMaxValueKey";
import Loading from "../pages/Loading";
import getHighScoreObj from "../utility/getHighScoreObj";

const App = () => {
  const [score, setScore] = useState(DEFAULT_SCORE);
  const highScoreObj = getHighScoreObj(score.combat, score.supply);
  const cCode = getMaxValueKey(highScoreObj);
  const queryStringHash = Object.values(highScoreObj).map((value) => {return String(value).padStart(3, 0)});
  const currentUrl = document.location.href;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Helmet>
          <title>나와 가장 어울리는 병과는 무엇일까?</title>
          <link rel="icon" href={favicon} />
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <meta property='og:url' content={currentUrl} />
          <meta property='og:title' content="병과 테스트 하기" />
          <meta property='og:description' content="내가 재입대를 하게 된다면 나와 맞는 병과는 무엇일까?" />
          <meta property='og:image' content={landing}/>

          <meta property='twitter:title' content="병과 테스트 하기" />
          <meta property='twitter:description' content="내가 재입대를 하게 된다면 나와 맞는 병과는 무엇일까?" />
          <meta property='twitter:image' content={landing}/>
        </Helmet>
        <Router>
          <Route exact path="/">
            <Landing></Landing>
          </Route>
          <Route path="/category">
            <Category score={score} setScore={setScore}></Category>
          </Route>
          <Route path="/combat">
            <Combat score={score} setScore={setScore}></Combat>
          </Route>
          <Route path="/supply">
            <Supply score={score} setScore={setScore}></Supply>
          </Route>
          <Route path="/loading">
            <Loading cCode={cCode} queryStringHash={queryStringHash}/>
          </Route>
          <Route path="/result/:cCode">
            <Result setScore = {setScore} highScoreObj={highScoreObj}></Result>
          </Route>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
