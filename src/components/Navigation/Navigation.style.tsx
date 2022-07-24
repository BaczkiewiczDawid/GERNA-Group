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
  animation: ${slide} .25s alternate;

  a {
    margin: 1rem 2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;
  }
`;

export const HamburgerWrapper = styled.div`
  z-index: 2;
`;
