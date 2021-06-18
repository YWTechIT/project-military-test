import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
  }

h1 {
  font-size: 24px;
  margin: 4px;
  text-align: center;
  @media screen and (min-width: 600px){
    font-size: 34px;
  }
}

h2 {
  font-size: 20px;
  margin: 10px 5px 14px 5px;
  text-align: center;
  @media screen and (min-width: 600px){
    font-size: 24px;
  }
}

h3 {
  font-size: 16px;
  margin: 4px;
  text-align: center;
  @media screen and (min-width: 600px){
    font-size: 20px;
  }
}
`;

export default GlobalStyle;
