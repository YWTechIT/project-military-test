import { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../globalStyle";
import Category from "../pages/Category";
import Combat from "../pages/Combat";
import Supply from "../pages/Supply";
import theme from "../theme";

const App = () => {
  const defaultScore = {
    category: {
      combatScore: 0,
      supplyScore: 0,
    },
    combat: {
      infantryScore: 0,
      artilleryScore: 0,
      armorScore: 0,
      engineerScore: 0,
      signalScore: 0,
      intelligenceScore: 0,
    },
    supply: {
      affairScore: 0,
      medicScore: 0,
      weaponScore: 0,
      policeScore: 0,
      prayScore: 0,
      bandScore: 0,
    },
  };

  const [score, setScore] = useState(defaultScore);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Category score = {score} setScore={setScore}></Category>
        <Combat score = {score} setScore={setScore}></Combat>
        <Supply score = {score} setScore={setScore}></Supply>
      </ThemeProvider>
    </>
  );
};

export default App;
