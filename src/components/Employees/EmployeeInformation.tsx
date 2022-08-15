import { Label } from "components/Employees/EmployeeInformation.style";
import Input from "components/Employees/Input";
import React from "react";

type EmployeeInformationType = {
  label: string;
  value: string | number;
  name?: string;
  setEmployeeDetails?: any,
  type?: string
};

const EmployeeInformation = ({
  label,
  value,
  name,
  setEmployeeDetails,
  type,
}: EmployeeInformationType) => {
  const handleChangeUserDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployeeDetails((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Label htmlFor={label}>{label}</Label>
      <Input id={label} onChange={handleChangeUserDetails} value={value} name={name} type={type}  />
      
    </>
  );
};

export default EmployeeInformation;
