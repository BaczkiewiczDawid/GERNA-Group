import styled  from "styled-components"

interface InputProps {
    type: string,
    placeholder: string,
    value: string,
    onChange: (e: any) => void,
    autoComplete: string,
    name: string,
}

export const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
    padding: .5rem;
    width: 100%;
    margin-top: 1.8rem;
`;

const Input = ({ type, placeholder, value, onChange, autoComplete, name }: InputProps) => {
    return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} autoComplete={autoComplete} name={name} />
}

export default Input