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
    value: string | number,
    onChange?: any,
    name?: any,
}

const Input = ({ type, value, onChange, name }: InputType) => {
    return (
        <StyledInput type={type} value={value} name={name} onChange={onChange} />
    )
}

export default Input