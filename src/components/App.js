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
import getCurrentPage from "../utility/getCurrentPage";
import getMaxValueKey from "../utility/getMaxValueKey";

const App = () => {
  const [score, setScore] = useState(DEFAULT_SCORE);
  const currentPage = getCurrentPage(score.combat, score.supply);
  const maxKey = getMaxValueKey(currentPage);
  console.log(score.category)


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
          <Route path="/result">
            <Result setScore = {setScore} maxKey={maxKey}></Result>
          </Route>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
