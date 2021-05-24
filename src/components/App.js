import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import DEFAULTSCORE from "../constant/defaultScore";
import getMaxKey from "../utility/getMaxKey";
import GlobalStyle from "../globalStyle";
import Category from "../pages/Category";
import Combat from "../pages/Combat";
import Supply from "../pages/Supply";
import theme from "../theme";

const App = () => {
  const [score, setScore] = useState(DEFAULTSCORE);
  const categoryKey = getMaxKey(score.category);
  const combatKey = getMaxKey(score.combat);
  const supplyKey = getMaxKey(score.supply);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router>
          <Route exact path="/">
            <p>landing Page</p>
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
