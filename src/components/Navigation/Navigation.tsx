import { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'
import { StyledNav } from 'components/Navigation/Navigation.style';
import mobileLogo from 'assets/images/mobile-logo.png';
import desktopLogo from 'assets/images/desktop-logo.png';

const Navigation = () => {
    const [isOpen, setOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false);

    window.onresize = () => {
        setIsMobile(window.innerWidth < 768 ? true : false);
    }

    return (
        <StyledNav>
            <img src={isMobile ? mobileLogo : desktopLogo} alt="Gerna Group" />
            <Hamburger toggled={isOpen} toggle={setOpen} color="#FAFAFA" />
        </StyledNav>
    )
}

export default Navigation;