import { useState } from "react";
import { theme } from "assets/styles/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "assets/styles/GlobalStyle";
import Login from "components/Login/Login";
import Dashboard from "components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserProfile from 'components/UserProfile/UserProfile';
import Settings from 'components/Settings/Settings';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState('');

  if (isAuthenticated !== '') {
    localStorage.setItem('isAuthenticated', JSON.stringify(isAuthenticated));
    const data = localStorage.getItem('isAuthenticated');
    console.log(JSON.parse(data));
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route
            exact
            path="/"
            element={<Dashboard isAuthenticated={isAuthenticated} />}
          />
          <Route path={`/profile/:userId`} element={<UserProfile isAuthenticated={isAuthenticated} />} />
          <Route path={'/settings'} element={<Settings isAuthenticated={isAuthenticated} />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
