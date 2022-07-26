import React from "react";
import GlobalStyle from "assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/Theme";
import Navigation from "components/Navigation/Navigation";
import Dashboard from "components/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
