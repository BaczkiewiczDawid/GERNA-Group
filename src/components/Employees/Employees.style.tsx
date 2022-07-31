import styled from "styled-components";

export const DepartmentNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem auto;
  width: 80vw;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.background};
    height: 100vh;
    position: fixed;
    left: 12vw;
    width: 25vw;
    margin: 0;
    -webkit-box-shadow: 6px 0px 25px -14px rgba(66, 68, 90, 1);
    -moz-box-shadow: 6px 0px 25px -14px rgba(66, 68, 90, 1);
    box-shadow: 6px 0px 25px -14px rgba(66, 68, 90, 1);

    h2 {
      margin-top: 2rem;
      margin-left: 2rem;
    }

    select {
      display: none;
    }
  }

  @media screen and (min-width: 1080px) {
    width: 20vw;
  }

  @media screen and (min-width: 1440px) {
    width: 15vw;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  th {
    font-size: .75rem;
  }

  td {
    font-size: .75rem;
    font-weight: 300;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LinksContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 2rem;
    margin-left: 2rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
      margin: 0.5rem 0;
      font-size: 0.9rem;
    }
  }
`;

export const Content = styled.section`
  margin-left: 1rem;

  h1 {
      margin-top: 2rem;
    }

  @media screen and (min-width: 768px) {
    margin-left: 40vw;
  }
`;
