import { Label } from "components/Employees/EmployeeInformation.style";
import Input from "components/Employees/Input";
import React from "react";

type EmployeeInformationType = {
  label: string;
  value: string | number;
  onChange?: any;
  name?: string;
  setSelectedUserDetails: any,
};

const EmployeeInformation = ({
  label,
  value,
  onChange,
  name,
  setSelectedUserDetails
}: EmployeeInformationType) => {
  const handleChangeUserDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedUserDetails((prevState: any) => ({
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
