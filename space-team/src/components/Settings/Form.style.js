import styled from "styled-components";

export const InputWrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  label {
    color: ${({ theme }) => theme.text};
  }

  select {
    background-color: transparent;
    border: 1px solid rgba(250, 250, 250, 0.2);
    padding: 0.8rem 2rem;
    border-radius: 5px;
    margin-top: 1.3rem;
    box-shadow: 8px 8px 26px -16px rgba(42, 42, 42, 1);
    width: 90vw;
    color: ${({ theme }) => theme.text};
  }

  @media screen and (min-width: 768px) {
    select {
      width: 25vw;
    }
  }

  @media screen and (min-width: 1440px) {
    select {
      width: 19vw;
    }
  }
`;
