import styled, { keyframes } from "styled-components";

const appear = keyframes`
    from {
        opacity: 0;
        transform: translateY(-100%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Background = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(42, 42, 42, 0.75);
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  width: 90vw;
  height: 30vh;
  background-color: ${({ theme }) => theme.white};
  border-radius: 4px;
  border: 1px solid rgba(42, 42, 42, 0.2);
  box-shadow: 8px 8px 26px -16px rgba(42, 42, 42, 1);
  margin-top: 2rem;
  animation: ${appear} .25s linear;

  h1 {
    margin: 0;
    color: ${({ theme }) => theme.green};
    margin: 1rem 0;
  }

  p {
    font-weight: 300;
  }

  button {
    border: 2px solid ${({ theme }) => theme.green};
    background-color: transparent;
    width: 80%;
    padding: 0.5rem;
    color: ${({ theme }) => theme.green};
    cursor: pointer;
    margin: 1rem 0;

    &:hover {
      background-color: ${({ theme }) => theme.green};
      color: ${({ theme }) => theme.white};
      transition: 0.2s;
    }
  }

  @media screen and (min-width: 768px) {
      width: 50vw;
      margin-left: 13rem;
  }

  @media screen and (min-width: 1080px) {
      width: 40vw;
  }

  @media screen and (min-width: 1440px) {
      h1 {
          font-size: 2rem;
          margin: 1.4rem 0;
      }

      p {
          font-size: 1.2rem;
      }

      button {
          font-size: 1.2rem;
          margin: 1.4rem 0;
      }
  }
`;