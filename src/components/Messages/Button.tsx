import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.background};
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  border-radius: 25px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkerBlue};
    transition: 0.25s;
  }

  @media screen and (min-width: 1080px) {
    font-size: 1.1rem;
    padding: 1.2rem 2.2rem;
    border-radius: 30px;
  }
`;

const Button = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/new/message", { replace: true });
  };

  return <StyledButton onClick={handleRedirect}>New message</StyledButton>;
};

export default Button;
