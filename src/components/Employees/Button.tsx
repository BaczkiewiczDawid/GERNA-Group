import styled from 'styled-components';

type ButtonType = {
    text: string,
    onClick?: () => {},
}

const StyledButton = styled.button`
    background-color: ${({ theme }) => theme.colors.blue};
    border: none;
    color: ${({ theme }) => theme.colors.background};
    padding: .8rem 1.6rem;
    border-radius: 5px;
    margin-top: 2rem;
    cursor: pointer;
    font-weight: bold;
`;

const Button = ({ text, onClick }: ButtonType) => {
    return (
        <StyledButton onClick={onClick}>{text}</StyledButton>
    )
};

export default Button
