import { useState } from "react";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import Wrapper from "components/Dashboard/Wrapper";
import SelectDepartment from "components/Employees/SelectDepartment";
import EmployeeInformation from "./EmployeeInformation";
import {
  StyledForm,
  Title,
  InvisibleInput,
} from "components/Employees/NewEmployee.style";
import Button from "components/Employees/Button";
import Axios from "axios";
import Modal from "components/Modal/Modal";
import useModal from "hooks/useModal";
import useAuth from "hooks/useAuth";
import emailjs from "emailjs-com";
import { useStateWithCallbackLazy } from "use-state-with-callback";

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
    department: "katowice",
  };
  const [employeeInformation, setEmployeeInformation] = useState(
    initialEmployeeInformations
  );
  const [password, setPassword] = useStateWithCallbackLazy("");
  const isAuthenticated = useAuth();

  const { showModal, modalInformation, setModalInformation, ResultType } =
    useModal();

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_aev4svh",
        "template_vzmo5os",
        e.target,
        "TFiGvZVNaPgrAPQie"
      )
      .then((result: any) => {
        console.log(result.text);
        setEmployeeInformation(initialEmployeeInformations);
      })
      .catch((err: any) => {
        console.log(err.text);
      });
  };

  const handleNewEmployee = (e: Event) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/new-employee", {
      data: employeeInformation,
    })
      .then(async (response) => {
        console.log(response);
        showModal(ResultType.success, "Employee added successfully!");
        setPassword(response.data, () => {
          sendEmail(e);
        });
      })
      .catch((err) => {
        console.log(err);
        showModal(ResultType.error, "Something went wrong");
      });
  };

  return (
    <Wrapper>
      <h1>Add new employee</h1>
      <ContentWrapper>
        <Title>Select department</Title>
        <SelectDepartment setEmployeeInformation={setEmployeeInformation} />
        <StyledForm onSubmit={(e: any) => handleNewEmployee(e)}>
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
            type="number"
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
            type="number"
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
            type="number"
            setEmployeeDetails={setEmployeeInformation}
          />
          <InvisibleInput type="text" name="password" value={password} />
          <Button type="submit" text="Add new employee" />
        </StyledForm>
      </ContentWrapper>
      <Modal
        setIsOpen={setModalInformation}
        isOpen={modalInformation.isOpen}
        message={modalInformation.message}
        type={modalInformation.type}
      />
    </Wrapper>
  );
};

export default NewEmployee;
