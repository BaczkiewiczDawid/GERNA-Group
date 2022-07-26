import { theme } from "assets/styles/Theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 17vw;
  }

  h1 {
    color: ${({ theme }) => theme.colors.text};
    margin-top: 2rem;
  }
`;

export const InformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
`;

export const Informations = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw;
  height: 25vh;
  background-color: ${({ theme }) => theme.colors.darkerBackground};
  padding: 1rem;
  color: ${({ theme }) => theme.colors.text};
  -webkit-box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  border-radius: 0.3rem;
  margin-top: 2rem;

  h2 {
    font-weight: 500;
  }

  p {
    margin-top: 0.7rem;
  }

  @media screen and (min-width: 768px) {
    width: 14rem;
    height: 9rem;

    &:nth-child(n + 2) {
      margin-left: 2rem;
    }
  }
`;

export const Count = styled.p`
  font-weight: 700;
  font-size: 1.65rem;
`;

export const FinancialDetails = styled.p`
  color: ${({ theme }) => theme.colors.green};

  span {
    color: ${({ theme }) => theme.colors.text};
  }
`;
