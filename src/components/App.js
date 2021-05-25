import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import DEFAULT_SCORE from "../constant/DEFAULT_SCORE";
import getMaxValueKey from "../utility/getMaxKey";
import GlobalStyle from "../globalStyle";
import Category from "../pages/Category";
import Combat from "../pages/Combat";
import Supply from "../pages/Supply";
import theme from "../theme";
import Landing from "../pages/Landing";

const App = () => {
  const [score, setScore] = useState(DEFAULT_SCORE);

  const combatKey = getMaxValueKey(score.combat);
  const supplyKey = getMaxValueKey(score.supply);

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
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
