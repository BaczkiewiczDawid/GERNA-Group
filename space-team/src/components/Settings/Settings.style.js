import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.black};
  margin-top: 2rem;
  font-size: 1.8rem;
`;

export const Container = styled.div`
  margin-left: 1rem;
`;

export const SettingsContent = styled.section`
  h3 {
    font-weight: 300;
    margin-top: 4rem;
  }

  h4 {
    margin-top: 4rem;
    font-size: 1.4rem;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  label {
    font-size: 1rem;
  }

  input {
    background-color: transparent;
    border: 1px solid rgba(42, 42, 42, 0.2);
    padding: 0.8rem 2rem;
    border-radius: 5px;
    margin-top: 1.3rem;
    box-shadow: 8px 8px 26px -16px rgba(42, 42, 42, 1);
    width: 90vw;
  }

  @media screen and (min-width: 768px) {
    input {
      width: 25vw;
    }

    &:nth-child(even) {
      margin-left: 3rem;
    }
  }

  @media screen and (min-width: 1440px) {
    label {
      font-size: 1.1rem;
    }

    input {
      font-size: 1.1rem;
      width: 19vw;
    }

    &:nth-child(even) {
      margin-left: 6rem;
    }
  }
`;