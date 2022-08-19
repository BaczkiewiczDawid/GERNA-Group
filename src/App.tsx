import React from "react";
import GlobalStyle from "assets/styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/Theme";
import Navigation from "components/Navigation/Navigation";
import Dashboard from "components/Dashboard/Dashboard";
import Employees from "components/Employees/Employees";
import NewEmployee from "components/Employees/NewEmployee";
import CarsList from "components/CarsList/CarsList";
import CarDetails from "components/CarsList/CarDetails";
import NewCar from "components/CarsList/NewCar";
import NewSales from "components/NewSales/NewSales";
import Messages from "components/Messages/Messages";
import Login from "components/Login/Login";
import { Routes, Route, useLocation } from "react-router-dom";
import ConfirmationModalProvider from "context/ConfirmationModalCtx";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <ConfirmationModalProvider>
          {location.pathname !== "/login" && <Navigation />}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/employees/:department" element={<Employees />} />
            <Route path="/employees/new" element={<NewEmployee />} />
            <Route path="/cars" element={<CarsList />} />
            <Route path="/cars/new" element={<NewCar />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/sales/new" element={<NewSales />} />
            <Route path="/messages" element={<Messages />} />
          </Routes>
        </ConfirmationModalProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
