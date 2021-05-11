import { useState } from "react";
import { ThemeProvider } from "styled-components";
import Combat from "../pages/Combat";
import Supply from "../pages/Supply";
import theme from "../theme";

const App = () => {
  const defaultScore = {
    combat: {
      shortScore: 0,
      longScore: 0,
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
        <Combat score={score} setScore={setScore}></Combat>
        <Supply score={score} setScore={setScore}></Supply>
      </ThemeProvider>
    </>
  );
};

export default App;
