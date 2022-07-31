import styled from 'styled-components';

export const StyledInput = styled.input`
    margin-top: 1rem;
    padding: .5rem;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
    background-color: transparent;
`;

type InputType = {
    type: string,
    value: string | number
}

const Input = ({ type, value }: InputType) => {
    return (
        <StyledInput type={type} value={value} />
    )
}

export default Input