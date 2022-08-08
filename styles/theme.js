import { createGlobalStyle } from "styled-components";

export const darkTheme = {
    colors: {
        background: "#2d2d2d",
        white: "#dfdfdf",
        lightgrey: "#c8c8c8",
        darkgrey: "#595959",
        accentOrange: "#e68600",
    },
    fonts: {
        // mono: "'Fira Code', monospace",
    },
};

export const GlobalStyles = createGlobalStyle`

html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;  
    padding: 0;
    margin: 0;
    /* font-family: 'Public Sans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.lightgrey};

    
    @media (max-width: 768px) {
      font-size: 14px;
    }
    @media (max-width: 480px) {
        font-size: 12px;
    }
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
    line-height: 1.5;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
}

section {
  padding: 100px 0;
  margin: 0px auto;

}
`;
