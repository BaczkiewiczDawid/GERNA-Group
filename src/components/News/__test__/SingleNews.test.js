import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/Theme";
import '@testing-library/jest-dom'
import SingleNews from "components/News/SingleNews";

const newsDetails = {
  url: "https://images.unsplash.com/photo-1661010854334-7a8558053ea2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
  title: "Best title ever!",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, fugiat?",
};

describe("Single news", () => {
  it("should display single news", () => {
    render(
      <ThemeProvider theme={theme}>
        <SingleNews url={newsDetails.url} title={newsDetails.title} description={newsDetails.description} />
      </ThemeProvider>
    );

    const url = screen.getByRole('img');
    const title = screen.getByRole('heading');
    const paragraph = screen.getByText(newsDetails.description)

    expect(url).toBeInTheDocument();
    expect(paragraph).toBeInTheDocument();
    expect(title).toHaveTextContent('Best title ever!')
  });
});
