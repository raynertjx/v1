import { createGlobalStyle } from "styled-components";

export const darkTheme = {
    colors: {
        background: "#2d2d2d",
        white: "#dfdfdf",
        lightgrey: "#c8c8c8",
        darkgrey: "#595959",
        accentOrange: "#e68600",
        // accentGreen: "#a5d348",
        // accentPurple: "#a286f9",
        // accentPink: "#e04076",
        // accentCyan: "#63cad5",
    },
    fonts: {
        mono: "'Fira Code', monospace",
        sans: "Roboto",
    },
};

export const GlobalStyles = createGlobalStyle`
html,
body {
    scroll-behavior: smooth;
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    /* font-family: Inter, sans-serif; */
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.lightgrey};

}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6, p, ul, li {
    padding: 0;
    margin: 0;
}

section {
  padding: 100px 0;
}
`;
