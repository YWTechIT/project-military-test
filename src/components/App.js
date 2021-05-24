import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../globalStyle";
import Category from "../pages/Category";
import Combat from "../pages/Combat";
import Supply from "../pages/Supply";
import theme from "../theme";
import defaultScore from "./defaultScore";
import getCode from "./getCode";

const App = () => {
  const [score, setScore] = useState(defaultScore);
  const getCombatCode = getCode(score.combat);
  const getSupplyCode = getCode(score.supply);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Category score={score} setScore={setScore}></Category>
        <Combat score={score} setScore={setScore}></Combat>
        <Supply score={score} setScore={setScore}></Supply>
      </ThemeProvider>
    </>
  );
};

export default App;
