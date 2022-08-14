import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import TopSellingModels from "components/Dashboard/TopSellingModels";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/Theme";

it("should render cars that been sold 1 time or more", () => {
  render(
    <ThemeProvider theme={theme}>
      <TopSellingModels />
    </ThemeProvider>
  );
});
