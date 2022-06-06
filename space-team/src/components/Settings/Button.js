import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  padding: 0.6rem 2.3rem;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 3rem;

  @media screen and (min-width: 768px) {
    margin-left: ${(props) => (props.secondary ? "0" : "3rem")};
  }
`;

const Button = ({ value, secondary }) => {
    return <StyledButton secondary={secondary}>{value}</StyledButton>
}

export default Button;