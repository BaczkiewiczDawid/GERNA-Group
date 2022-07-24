import { useState, useEffect, useRef } from "react";
import Hamburger from "hamburger-react";
import {
  StyledNav,
  NavContent,
  HamburgerWrapper,
} from "components/Navigation/Navigation.style";
import mobileLogo from "assets/images/mobile-logo.png";
import desktopLogo from "assets/images/desktop-logo.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  window.onresize = () => {
    setIsMobile(window.innerWidth < 768 ? true : false);
    setIsOpen(window.innerWidth > 768 ? true : false);
  };

  const navRef: any = useRef(null);

  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      const handleClickOutside = (e: any) => {
        if (ref.current && !ref.current.contains(e.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };


  useOutsideAlerter(navRef);

  return (
    <StyledNav>
      <img src={isMobile ? mobileLogo : desktopLogo} alt="Gerna Group" />
      <HamburgerWrapper>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          color={isOpen ? "#2A2A2A" : "#FAFAFA"}
        />
      </HamburgerWrapper>
      <NavContent isOpen={isOpen} ref={navRef}>
        <a href="#">Link 1</a>
        <a href="#">Link 1</a>
        <a href="#">Link 1</a>
        <a href="#">Link 1</a>
      </NavContent>
    </StyledNav>
  );
};

export default Navigation;
