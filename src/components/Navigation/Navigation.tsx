import { useState, useRef } from "react";
import Hamburger from "hamburger-react";
import {
  StyledNav,
  NavContent,
  HamburgerWrapper,
  NavDesktopContent,
} from "components/Navigation/Navigation.style";
import mobileLogo from "assets/images/mobile-logo.svg";
import desktopLogo from "assets/images/desktop-logo.svg";
import Links from "components/Navigation/Links";
import useOutsideClickDetection from "hooks/useOutsideClickDetection";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth < 768 ? true : false
  );

  window.onresize = () => {
    setIsMobile(window.innerWidth < 768 ? true : false);
    setIsOpen(window.innerWidth > 768 ? true : false);
  };

  const navRef: any = useRef(null);

  useOutsideClickDetection(navRef, setIsOpen);

  return (
    <StyledNav ref={navRef}>
      <img src={isMobile ? mobileLogo : desktopLogo} alt="Gerna Group" />
      <HamburgerWrapper>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color={isOpen ? "#2A2A2A" : "#FAFAFA"}
        />
      </HamburgerWrapper>
      <NavContent isOpen={isOpen} >
        <Links />
      </NavContent>
      <NavDesktopContent>
        <Links />
      </NavDesktopContent>
    </StyledNav>
  );
};

export default Navigation;
