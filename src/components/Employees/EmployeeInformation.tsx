import { Label } from "components/Employees/EmployeeInformation.style";
import Input from "components/Employees/Input";
import React from "react";

type EmployeeInformationType = {
  label: string;
  value: string | number;
  onChange?: any,
  name?: string,
};

const EmployeeInformation = ({ label, value, onChange, name }: EmployeeInformationType) => {

  return (
    <>
      <Label>{label}</Label>
      <Input onChange={onChange} value={value} name={name} type="text"/>
    </>
  );
};

export default EmployeeInformation;
