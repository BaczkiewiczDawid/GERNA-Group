import { useState } from "react";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import Wrapper from "components/Dashboard/Wrapper";
import SelectDepartment from "components/Employees/SelectDepartment";
import EmployeeInformation from "./EmployeeInformation";
import { StyledForm, Title } from "components/Employees/NewEmployee.style";
import Button from "components/Employees/Button";
import Axios from "axios";

const NewEmployee = () => {
  const initialEmployeeInformations = {
    name: "",
    age: "",
    position: "",
    address: "",
    city: "",
    phone_number: "",
    email: "",
    salary: "",
    department: "",
  };
  const [employeeInformation, setEmployeeInformation] = useState(
    initialEmployeeInformations
  );

  const handleNewEmployee = (e: Event) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/new-employee", {
      data: employeeInformation,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(employeeInformation);

  return (
    <Wrapper>
      <h1>Add new employee</h1>
      <ContentWrapper>
        <Title>Select department</Title>
        <SelectDepartment setEmployeeInformation={setEmployeeInformation} />
        <StyledForm>
          <EmployeeInformation
            label="Name"
            value={employeeInformation?.name}
            name="name"
            setEmployeeDetails={setEmployeeInformation}
          />
          <EmployeeInformation
            label="Age"
            value={employeeInformation?.age}
            name="age"
            setEmployeeDetails={setEmployeeInformation}
          />
          <EmployeeInformation
            label="Position"
            value={employeeInformation?.position}
            name="position"
            setEmployeeDetails={setEmployeeInformation}
          />
          <EmployeeInformation
            label="Address"
            value={employeeInformation?.address}
            name="address"
            setEmployeeDetails={setEmployeeInformation}
          />
          <EmployeeInformation
            label="City"
            value={employeeInformation?.city}
            name="city"
            setEmployeeDetails={setEmployeeInformation}
          />
          <EmployeeInformation
            label="Phone number"
            value={employeeInformation?.phone_number}
            name="phone_number"
            setEmployeeDetails={setEmployeeInformation}
          />
          <EmployeeInformation
            label="Email"
            value={employeeInformation?.email}
            name="email"
            setEmployeeDetails={setEmployeeInformation}
          />
          <EmployeeInformation
            label="Salary"
            value={employeeInformation?.salary}
            name="salary"
            setEmployeeDetails={setEmployeeInformation}
          />
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
