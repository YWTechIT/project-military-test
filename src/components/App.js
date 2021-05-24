import { ThemeProvider } from "styled-components";
import GlobalStyle from "../globalStyle";
import Quiz from "../pages/Quiz";
import theme from "../theme";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Quiz></Quiz>
      </ThemeProvider>
    </>
  );
};

export default App;
