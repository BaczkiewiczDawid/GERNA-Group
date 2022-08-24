import React from "react";
import { StyledField, Error, Label } from "components/Employees/FormElement.style";

interface Props {
    label: string,
    placeholder: string,
    name: string,
    errors?: string | undefined,
    touched?: boolean | undefined,
    type?: 'number' | 'string',
}

const FormElement = ({ label, placeholder, name, errors, touched, type }: Props) => {
  return (
    <>
      <Label htmlFor="">{label}</Label>
      <StyledField type={type} name={name} placeholder={placeholder} />
      {errors && touched ? <Error>{errors}</Error> : null}
    </>
  );
};

export default FormElement;
