import styled from 'styled-components';

export const StyledInput = styled.input`
    margin-top: 1rem;
    padding: .5rem;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
    background-color: transparent;
`;

const Input = ({ type }: any) => {
    return (
        <StyledInput type={type} />
    )
}

export default Input