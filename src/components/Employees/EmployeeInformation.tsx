import { Label } from 'components/Employees/EmployeeInformation.style';
import Input from 'components/Employees/Input';

type EmployeeInformationType = {
    label: string,
    value: string | number,
}

const EmployeeInformation = ({ label, value }: EmployeeInformationType) => {
  return (
    <>
      <Label htmlFor="">{label}</Label>
      <Input type="text" value={value} />
    </>
  );
};

export default EmployeeInformation;
