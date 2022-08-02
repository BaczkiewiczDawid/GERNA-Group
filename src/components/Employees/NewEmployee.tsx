import ContentWrapper from "components/Dashboard/ContentWrapper";
import Wrapper from "components/Dashboard/Wrapper";
import SelectDepartment from "components/Employees/SelectDepartment";
import EmployeeInformation from "./EmployeeInformation";
import { StyledForm, Title } from "components/Employees/NewEmployee.style";
import Button from "components/Employees/Button";

const NewEmployee = () => {
  const handleNewEmployee = (e: Event) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <h1>Add new employee</h1>
      <ContentWrapper>
        <Title>Select department</Title>
        <SelectDepartment />
        <StyledForm>
          <EmployeeInformation label="Name" value="" />
          <EmployeeInformation label="Name" value="" />
          <EmployeeInformation label="Name" value="" />
          <EmployeeInformation label="Name" value="" />
          <EmployeeInformation label="Name" value="" />
          <Button
            text="Add new employee"
            onClick={(e: Event) => handleNewEmployee(e)}
          />
        </StyledForm>
      </ContentWrapper>
    </Wrapper>
  );
};

export default NewEmployee;
