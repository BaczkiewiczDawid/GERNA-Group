import styled from "styled-components";

type ButtonType = {
  text: string;
  onClick?: any;
  type?: "submit" | "button";
};

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  border: none;
  color: ${({ theme }) => theme.colors.background};
  padding: 0.8rem 1.6rem;
  border-radius: 5px;
  margin-top: 2rem;
  cursor: pointer;
  font-weight: bold;
`;

const Button = ({ text, onClick, type }: ButtonType) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {text}
    </StyledButton>
  );
};

export default Button;
