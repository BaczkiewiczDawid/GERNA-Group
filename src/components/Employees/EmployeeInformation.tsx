import { Label } from "components/Employees/EmployeeInformation.style";
import Input from "components/Employees/Input";
import React from "react";

type EmployeeInformationType = {
  label: string;
  value: string | number;
  name?: string;
  setEmployeeDetails?: any,
};

const EmployeeInformation = ({
  label,
  value,
  name,
  setEmployeeDetails
}: EmployeeInformationType) => {
  const handleChangeUserDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmployeeDetails((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Label>{label}</Label>
      <Input onChange={handleChangeUserDetails} value={value} name={name} type="text"  />
      
    </>
  );
};

export default EmployeeInformation;
