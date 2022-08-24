import styled from "styled-components";
import { Field } from 'formik'
import { InputProps } from 'types/types'

export const StyledInput = styled.input`
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  z-index: 0;
`;

const Input = ({ type, value, onChange, name, placeholder, autocomplete, id }: InputProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      autoComplete={autocomplete}
      id={id}
    />
  );
};

export default Input;
