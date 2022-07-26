import styled from "styled-components";
import { SelectType } from 'types/types'

const StyledSelect = styled.select<SelectType>`
  width: ${props => props.primary ? '100%' : '42%'};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0.25rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.text};
`;

const Select = ({ children, primary, name, onChange, title }: any) => {
  return <StyledSelect primary={primary} name={name} title={title} onChange={onChange}>{children}</StyledSelect>;
};

export default Select;
