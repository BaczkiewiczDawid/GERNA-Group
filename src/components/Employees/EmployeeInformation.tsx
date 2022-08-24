import {
  Label,
  ErrorMessage,
} from "components/Employees/EmployeeInformation.style";
import Input from "components/Employees/Input";
import React from "react";
import { EmployeeInformationProps } from 'types/types';

const EmployeeInformation = ({
  label,
  value,
  name,
  onChange,
  type,
  htmlFor,
  error,
}: EmployeeInformationProps) => {
  return (
    <>
      <Label htmlFor={htmlFor}>{label}</Label>
      <Input
        id={label}
        onChange={onChange}
        value={value}
        name={name}
        type={type}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </>
  );
};

export default EmployeeInformation;
