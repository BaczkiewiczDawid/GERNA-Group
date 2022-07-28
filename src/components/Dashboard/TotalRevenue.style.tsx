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

  @media screen and (min-width: 768px) {
    width: 50vw;
    margin: 0;
    margin-top: 3rem;
    height: 25rem;
  }
`;

export const Title = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  font-weight: 300;
  font-size: 1rem;
`;

export const Revenue = styled.span`
  font-weight: 700;
  font-size: 1.75rem;
`;
