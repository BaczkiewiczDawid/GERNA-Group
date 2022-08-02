import React from "react";
import GlobalStyle from "assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/Theme";
import Navigation from "components/Navigation/Navigation";
import Dashboard from "components/Dashboard/Dashboard";
import Employees from "components/Employees/Employees";
import NewEmployee from 'components/Employees/NewEmployee'
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
            <Route path="/employees/:department" element={<Employees />} />
            <Route path="/employees/new" element={<NewEmployee />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
