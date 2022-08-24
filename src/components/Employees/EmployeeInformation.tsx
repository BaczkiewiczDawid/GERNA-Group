import {
  Label,
  ErrorMessage,
} from "components/Employees/EmployeeInformation.style";
import Input from "components/Employees/Input";
import React from "react";

type EmployeeInformationType = {
  label: string;
  value: string | number;
  name?: string;
  setEmployeeDetails?: any;
  type?: string;
  htmlFor?: string;
  onChange?: any;
  error?: any
};

const EmployeeInformation = ({
  label,
  value,
  name,
  onChange,
  type,
  htmlFor,
  error,
}: EmployeeInformationType) => {
  // const handleChangeUserDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setEmployeeDetails((prevState: any) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

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
