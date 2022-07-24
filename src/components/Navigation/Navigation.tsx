import { useState } from "react";
import Hamburger from "hamburger-react";
import { StyledNav, NavContent, HamburgerWrapper } from "components/Navigation/Navigation.style";
import mobileLogo from "assets/images/mobile-logo.png";
import desktopLogo from "assets/images/desktop-logo.png";

const Navigation = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);

  window.onresize = () => {
    setIsMobile(window.innerWidth < 768 ? true : false);
  };

  return (
    <StyledNav>
      <img src={isMobile ? mobileLogo : desktopLogo} alt="Gerna Group" />
      <HamburgerWrapper>
        <Hamburger toggled={isOpen} toggle={setOpen} color={isOpen ? '#2A2A2A' : '#FAFAFA'} />
      </HamburgerWrapper>
      <NavContent isOpen={isOpen}>
        <a href="#">Link 1</a>
        <a href="#">Link 1</a>
        <a href="#">Link 1</a>
        <a href="#">Link 1</a>
      </NavContent>
    </StyledNav>
  );
};

export default Navigation;
