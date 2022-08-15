import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/Theme";
import TopSellingModels from "components/Dashboard/TopSellingModels";
import "@testing-library/jest-dom/extend-expect";

it("should render cars that been sold", () => {
  render(
    <ThemeProvider theme={theme}>
      <TopSellingModels />
    </ThemeProvider>
  );

  const table = screen.getByRole("table");

  expect(table).toBeInTheDocument();
  expect(table).toContainHTML("<tbody><tr></tr></tbody>");
});
