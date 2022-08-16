import styled from "styled-components";

type ButtonType = {
  text: string;
  onClick?: any;
  type?: "submit" | "button";
};

interface ButtonProps {
  secondary?: boolean
}

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  color: ${({ theme }) => theme.colors.background};
  padding: 0.8rem 1.6rem;
  border-radius: 5px;
  margin-top: ${props => props.secondary ? '4rem' : '2rem'};
  cursor: pointer;
  font-weight: bold;
  width: ${props => props.secondary ? '100%' : 'auto'};

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkerBlue};
    transition: .25s;
  }
`;

const Button = ({ text, onClick, type, secondary }: ButtonType & ButtonProps) => {
  return (
    <StyledButton onClick={onClick} type={type} secondary={secondary}>
      {text}
    </StyledButton>
  );
};

export default Button;
