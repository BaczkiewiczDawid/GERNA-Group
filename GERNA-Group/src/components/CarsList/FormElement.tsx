import Input from "components/Employees/Input";
import { Label } from 'components/CarsList/FormElement.style';
import { FormProps } from 'types/types'

const FormElement = ({ label, onChange, value, type, name, placeholder, autocomplete }: FormProps) => {
  return (
    <>
      <Label>{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        autocomplete={autocomplete}
      />
    </>
  );
};

export default FormElement;