import Input from "components/Employees/Input";
import { Label } from 'components/CarsList/FormElement.style';

type FormElementType = {
    label: string,
    onChange: (e: any) => void,
    value: string | number,
    type: string,
    name: string,
    placeholder: string,
}

const FormElement = ({ label, onChange, value, type, name, placeholder }: FormElementType) => {
  return (
    <>
      <Label>{label}</Label>
      <Input
        type={type}
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    </>
  );
};

export default FormElement;