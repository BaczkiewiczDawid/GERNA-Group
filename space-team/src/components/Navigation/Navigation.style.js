import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95vw;
  padding: 1.6rem;

  @media screen and (min-width: 768px) {
    margin-left: 32vw;
    width: auto;
    margin-top: 1rem;

    img {
      display: none;
    }
  }

  @media screen and (min-width: 1080px) {
    margin-left: 25vw;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 22vw;
  }
`;

export const NavigationContent = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 101vh;
  background-color: ${({ theme }) => theme.colors.background};
  z-index: 5;

  @media screen and (min-width: 768px) {
    width: 27vw;
    height: 100vh;
  }

  @media screen and (min-width: 1080px) {
    width: 22vw;
  }

  @media screen and (min-width: 1440px) {
    width: 17vw;
  }
`;

export const LinksContainer = styled.div`
  margin-top: 3rem;
  margin-left: 1.2rem;
`;

export const Underline = styled.div`
  width: 15rem;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.white};
  margin-left: 1.2rem;
  margin-top: 1.3rem;
`;