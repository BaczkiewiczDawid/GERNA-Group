import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-top: 1rem;
    font-weight: 700;
  }

  textarea {
    resize: none;
    height: 8rem;
    margin-top: 2rem;
    padding: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const EmployeeList = styled.div`
  width: 90vw;
  margin: 2rem auto;
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 5px;

  @media screen and (min-width: 768px) {
    position: fixed;
    right: 0;
    width: 20vw;
    height: 100vh;
    top: 0;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    margin: 0 auto;
  }
`;

export const List = styled.ul`
    list-style-type: none;

    li {
        padding: .4rem 0;
        cursor: pointer;
    }

    @media screen and (min-width: 768px) {
        margin-top: 8rem;
    }
`;

export const EmailsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Email = styled.div`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.background};
  padding: 0.7rem 1rem;
  font-weight: 300;
  font-size: 0.7rem;
  border-radius: 5px;
  width: auto;
  cursor: pointer;
  margin-right: 1rem;
  margin-top: 1rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkerBlue};
    transition: 0.25s;
  }
`;
