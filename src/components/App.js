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
  const queryStringHash = Object.values(highScoreObj).map((value) => {
    return String(value).padStart(3, 0);
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
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
            <Loading cCode={cCode} queryStringHash={queryStringHash} />
          </Route>
          <Route path="/result/:cCode">
            <Result setScore={setScore} highScoreObj={highScoreObj}></Result>
          </Route>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
