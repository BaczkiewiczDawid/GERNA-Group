import styled from "styled-components";
import { Field } from "formik";

export const StyledField = styled(Field)`
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
  background-color: transparent;
  z-index: 0;
`;

export const Label = styled.label`
  font-weight: 700;
  margin-top: 1rem;
`;

export const Error = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.red};
  font-size: 0.85rem;
  margin-left: 0.5rem;
`;
