import { fireEvent, render, screen, userEvent } from "@testing-library/react";
import NewEmployee from "components/Employees/NewEmployee";
import { theme } from "assets/styles/Theme";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter as Router } from "react-router-dom";

it("should be able to type in input element", async () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <NewEmployee />
      </Router>
    </ThemeProvider>
  );

  const inputElement = screen.getByLabelText("Name");

  expect(inputElement.textContent).toBe("");

  fireEvent.change(inputElement, {
    target: {
      value: "Dawid",
    },
  });

  expect(inputElement.value).toBe("Dawid");
});

it("should clear input values after running function", async () => {
  render(
    <ThemeProvider theme={theme}>
      <Router>
        <NewEmployee />
      </Router>
    </ThemeProvider>
  );

  const inputElement = screen.getByLabelText("Name");
  const button = screen.getByRole("button");

  fireEvent.change(inputElement, {
    target: {
      value: "Dawid",
    },
  });

  fireEvent.click(button);

  expect(inputElement.value).toBe("");
});
