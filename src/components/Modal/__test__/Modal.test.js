import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Modal from "components/Modal/Modal";
import { theme } from "assets/styles/Theme";
import { ThemeProvider } from "styled-components";

describe("modal", () => {
  it("should display message", () => {
    render(
      <ThemeProvider theme={theme}>
        <Modal message="Success" isOpen={true} />
      </ThemeProvider>
    );

    const imgElement = screen.getByRole("img");
    const paragraphElement = screen.getByTestId("message");

    expect(imgElement).toBeInTheDocument();
    expect(paragraphElement).toHaveTextContent("Success");
  });

  it("should display correct icon", () => {
    render(
      <ThemeProvider theme={theme}>
        <Modal message="Success" isOpen={true} type={0} />
      </ThemeProvider>
    );

    const imgElement = screen.getByRole("img");

    expect(imgElement.src).toContain("success.svg");
    expect(imgElement.alt).toContain("success");
  });
});
