import styled, { keyframes } from "styled-components";

const expand = keyframes`
    0% {
        height: 0%;
    }

    100% {
        height: 100%;
    }
`;

export const MessageWrapper = styled.article`
  color: ${({ theme }) => theme.colors.text};
  margin-top: 2rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90%;
  margin: 0 auto;

  div {
    flex-direction: row;
  }

  h2 {
    font-size: 1.1rem;
  }

  h3 {
    font-size: 0.9rem;
    margin-top: 0.7rem;
  }

  p {
    font-size: 0.8rem;
  }
`;

export const SecondaryDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.text};
  margin-top: 1rem;
`;

export const Details = styled.div`
    margin: 1rem auto;
    width: 90%;
    height: auto;
    animation: ${expand} 1s ease-in forwards;
`;
