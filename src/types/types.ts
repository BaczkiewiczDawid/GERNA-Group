import { StringMappingType } from "typescript";
import { boolean } from "yup";

export interface Employee {
  id?: number | undefined;
  address: string;
  age: number | undefined;
  city: string;
  department: string;
  email: string;
  name: string;
  phone_number: number | undefined;
  position: string;
  salary: number | undefined;
}

export interface EmployeeDetailsProps {
  employeeDetails: Employee;
  setEmployeeDetails: any;
}

export interface FormProps {
  label: string;
  placeholder: string;
  name: string;
  errors?: string | undefined;
  touched?: boolean | undefined;
  type?: "number" | "text" | "password";
  value?: any;
  onChange?: any;
  autocomplete?: "on" | "off";
  component?: "input" | "textarea" | "select";
}

export interface InputProps {
  type?: string;
  value: string | number;
  onChange?: any;
  name?: string;
  placeholder?: string;
  autocomplete?: string;
  id?: string;
}

export interface EmployeeInformationProps {
  label: string;
  value: string | number;
  name?: string;
  setEmployeeDetails?: any;
  type?: string;
  htmlFor?: string;
  onChange?: any;
  error?: any;
}

export interface ButtonType {
  text: string;
  onClick?: any;
  onSubmit?: any;
  type?: "submit" | "button";
}

export interface ButtonProps {
  secondary?: boolean;
}

export interface Car {
  id: number;
  manufactuer: string;
  model: string;
  price: number;
  engine?: string;
  equipment?: any;
}

export interface SelectEquipmentProps {
  selectedEquipment: string[];
  setSelectedEquipment: any;
}

export enum Response {
  yes = 0,
  no = 1,
}

export interface EnteredValuesProps {
  email: string;
  password: string;
}

export interface Message {
  title: string;
  description: string;
}

export interface MessageProps {
  message: string;
  title: string;
  date: string;
  sender: string;
}

export interface NewsProps {
  url: string;
  title: string;
  description: string;
}

export type SelectType = {
  primary?: boolean;
};
