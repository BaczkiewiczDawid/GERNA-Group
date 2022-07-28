import styled from "styled-components";

export const ContentWrapper = styled.div`
  width: 90vw;
  height: 30rem;
  -webkit-box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  background-color: ${({ theme }) => theme.colors.darkerBackground};
  padding: 1rem;
  margin: 1rem auto;
  color: ${({ theme }) => theme.colors.text};

  h2 {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  @media screen and (min-width: 768px) {
    width: 50vw;
    margin: 0;
    margin-top: 3rem;
    height: 25rem;
  }
`;
