import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import SingleCar from "components/CarsList/SingleCar";
import { theme } from "assets/styles/Theme";
import { ThemeProvider } from "styled-components";

describe("modal", () => {
  it("should display properly title", () => {
    render(
      <ThemeProvider theme={theme}>
        <SingleCar manufactuer="Audi" model="A6" />
      </ThemeProvider>
    );

    const headerElement = screen.getByRole("heading");

    expect(headerElement).toHaveTextContent("Audi A6");
  });

  it("should display properly image", () => {
    render(
      <ThemeProvider theme={theme}>
        <SingleCar manufactuer="Audi" model="A6" />
      </ThemeProvider>
    );

    const imgElement = screen.getByRole("img");

    expect(imgElement.alt).toBe("Audi A6");
  });

  it("should display price", () => {
    render(
      <ThemeProvider theme={theme}>
        <SingleCar price="48900" />
      </ThemeProvider>
    );

    const price = screen.getByTestId('price');

    expect(price).toHaveTextContent('$48900')
  });
});
