import { useState, useEffect } from "react";
import logo from "assets/images/logo.svg";
import whiteLogo from "assets/images/logo-white.svg";
import {
  Nav,
  NavigationContent,
  LinksContainer,
  Underline,
} from "components/Navigation/Navigation.style";
import NavLink from "components/Navigation/NavLink";
import BurgerMenu from "components/Navigation/BurgerMenu";
import Logout from "components/Navigation/Logout";
import Profile from "components/Dashboard/Profile";
import { useLocation } from "react-router-dom";
import NavigationItems from "data/NavigationItems";
import SearchBar from "components/Navigation/SearchBar";

const Navigation = ({ loggedUser, picture }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  useEffect(() => {
    isMobile ? setIsOpen(false) : setIsOpen(true);
  }, [isMobile]);

  return (
    <>
      <Nav>
        <img src={isOpen && isMobile ? whiteLogo : logo} alt="space team" />
        <BurgerMenu isOpen={isOpen} handleMenu={handleMenu} />
      </Nav>
      {isOpen ? (
        <NavigationContent>
          <Profile picture={picture} author={loggedUser}></Profile>
          <Underline />
          <SearchBar picture={picture} />
          <LinksContainer>
            {NavigationItems.map((el) => {
              return (
                <NavLink
                  key={el.icon}
                  href={el.href}
                  icon={el.icon}
                  alt={el.alt}
                  text={el.text}
                  active={el.href === location.pathname}
                />
              );
            })}
          </LinksContainer>
          <Logout />
        </NavigationContent>
      ) : null}
    </>
  );
};

export default Navigation;
