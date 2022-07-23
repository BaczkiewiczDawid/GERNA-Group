import React from "react";
import GlobalStyle from "assets/styles/GlobalStyle";
import {ThemeProvider} from "styled-components";
import { theme } from "assets/styles/Theme";
import Navigation from 'Navigation/Navigation';

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
      </ThemeProvider>
    </>
  );
}

export default App;
