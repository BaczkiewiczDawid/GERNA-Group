import backgroundImage from "assets/images/background.svg";
import logo from "assets/images/logo.svg";
import {
  Container,
  StyledBackground,
  Wrapper,
  Logo,
  Navigation,
  LinkWrapper,
  StyledLink,
  StyledNavLink,
  ImageWrapper
} from "components/Login/Login.style";
import Form from "components/Login/Form";
import { useLocation } from "react-router-dom";

const Register = ({ setIsAuthenticated, isAuthenticated }) => {
  const location = useLocation();

  return (
    <Container>
      <ImageWrapper>
        <StyledBackground src={backgroundImage} alt="wild forest" />
      </ImageWrapper>
      <Wrapper>
        <Logo href="#">
          <img src={logo} alt="space team" />
        </Logo>
        <Navigation register={location.pathname === "/register"}>
          <div></div>
          <LinkWrapper>
            <StyledNavLink to="/login" purple={location.pathname === "/login"}>
              Sign in
            </StyledNavLink>
            <StyledNavLink
              to="/register"
              purple={location.pathname === "/register"}
            >
              Sign up
            </StyledNavLink>
          </LinkWrapper>
        </Navigation>
        <Form
          location={location}
          setIsAuthenticated={setIsAuthenticated}
          isAuthenticated={isAuthenticated}
        />
        {location.pathname === "/register" ? (
          <StyledLink to="/login">
            Already have an account?<span> Login now!</span>
          </StyledLink>
        ) : (
          <StyledLink to="/register">
            Don't have an account?<span> Register now!</span>
          </StyledLink>
        )}
      </Wrapper>
    </Container>
  );
};

export default Register;
