import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  @media screen and (min-width: 1080px) {
    margin-top: 6rem;
  }
`;

export const Input = styled.input`
  width: 75vw;
  border: none;
  border-bottom: 1px solid ${props => props.err ? props.theme.colors.error : props.theme.colors.black};
  font-weight: 300;
  font-size: 1rem;
  color: ${props => props.err ? props.theme.colors.error : props.theme.colors.black};

  &:nth-child(n + 2) {
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) {
    width: 25vw;
    font-size: 0.8rem;
  }

  @media screen and (min-width: 1080px) {
    font-size: 1.1rem;

    &:nth-child(n + 2) {
      margin-top: 2.2rem;
    }
  }

  @media screen and (min-width: 1440px) {
    &:nth-child(n + 2) {
      margin-top: 3rem;
    }
  }
`;

export const StyledButton = styled.button`
  width: 75vw;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  border: none;
  border-radius: 10px;
  margin-top: 3rem;
  font-size: 1.15rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkPurple};
    transition: 0.2s;
  }

  @media screen and (min-width: 768px) {
    width: 25vw;
  }

  @media screen and (min-width: 1080px) {
    font-size: 1.4rem;
    padding: 0.7rem;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 5rem;
  }
`;

export const ErrorMessage = styled.span`
  color: ${({ theme }) => theme.colors.error};
  margin-left: 1rem;
  margin-top: 0.5rem;
`;
