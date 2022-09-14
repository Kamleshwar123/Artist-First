import "../styles/globals.css";
import React from "react";
import App from "next/app";
import { ThemeProvider } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import Head from "next/head";
import Script from 'next/script'

const theme = createTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#296ba0",
    },
    black: {
      main: "#000000",
    },
    companyBlue: {
      backgroundColor: "#65CFE9",
      color: "#fff",
    },
    companyRed: {
      backgroundColor: "#E44D69",
      color: "#000",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
});
function MyApp({ Component, pageProps }) {
  MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
    return { ...appProps };
  };
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default MyApp;
