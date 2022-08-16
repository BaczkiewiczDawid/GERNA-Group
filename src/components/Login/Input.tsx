import styled  from "styled-components"

export const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
    padding: .5rem;
    width: 100%;
    margin-top: 1.8rem;
`;

const Input = ({ type, placeholder, value, onChange, autoComplete }: any) => {
    return <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} autoComplete={autoComplete} />
}

export default Input