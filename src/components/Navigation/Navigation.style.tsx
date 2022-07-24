import styled, { keyframes } from "styled-components";

type NavType = {
  isOpen: boolean;
};

const slide = keyframes`
    0% {
        width: 20vw;
        opacity: 0;
    }

    100% {
        width: 80vw;
    }
`;

export const StyledNav = styled.nav`
  width: 100vw;
  height: 4rem;
  background-color: ${({ theme }) => theme.colors.blue};
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;

  @media screen and (min-width: 768px) {
    width: 13vw;
    height: 100%;
    position: fixed;
    justify-content: flex-start;
    align-items: flex-start;
    left: 0;
    flex-direction: column;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0.5rem;

    img {
      width: 80%;
      height: auto;
      margin: 2rem auto;
    }
  }
`;

export const NavContent = styled.div<NavType>`
  width: 80vw;
  position: fixed;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  right: 0;
  top: 0;
  -webkit-box-shadow: -6px 0px 28px -12px rgba(66, 68, 90, 1);
  -moz-box-shadow: -6px 0px 28px -12px rgba(66, 68, 90, 1);
  box-shadow: -6px 0px 28px -12px rgba(66, 68, 90, 1);
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: center;
  flex-direction: column;
  animation: ${slide} 0.25s alternate;
  z-index: 1;

  a {
    margin: 1rem 2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    background-color: transparent;
    position: static;
    width: 100%;
    box-shadow: none;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1rem;

    a {
      color: ${({ theme }) => theme.colors.background};
      margin: 0.8rem 0;
    }
  }
`;

export const HamburgerWrapper = styled.div`
  z-index: 2;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
