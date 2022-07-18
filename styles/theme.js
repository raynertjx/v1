import { createGlobalStyle } from "styled-components";

export const darkTheme = {
    background: "#363d43",
    fontColor: "#c2ccd5",
    accentGreen: "#a5d348",
    accentPurple: "#a286f9",
    accentPink: "#e04076",
    accentOrange: "#e89239",
    accentCyan: "#63cad5",
}

export const GlobalStyles = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    background-color: ${({theme}) => theme.background}
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}
`