import React from "react";
import { StyledField, Error, Label } from "components/Employees/FormElement.style";
import { FormProps } from 'types/types';

const FormElement = ({ label, placeholder, name, errors, touched, type }: FormProps) => {
  return (
    <>
      <Label htmlFor="">{label}</Label>
      <StyledField type={type} name={name} placeholder={placeholder} />
      {errors && touched ? <Error>{errors}</Error> : null}
    </>
  );
};

export default FormElement;
