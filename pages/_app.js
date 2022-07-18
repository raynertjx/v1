import { ThemeProvider } from "styled-components";
import { GlobalStyles, darkTheme } from "../styles/theme";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider theme={darkTheme}>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
