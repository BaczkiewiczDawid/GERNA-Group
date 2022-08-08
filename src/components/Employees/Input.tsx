import styled from "styled-components";

export const StyledInput = styled.input`
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
`;

type InputType = {
  type: string;
  value: string | number;
  onChange?: any;
  name?: any;
  placeholder?: string;
};

const Input = ({ type, value, onChange, name, placeholder }: InputType) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
};

export default Input;
