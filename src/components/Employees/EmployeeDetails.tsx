import React, { useState, useContext, useEffect } from "react";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import EmployeeInformation from "components/Employees/EmployeeInformation";
import Button from "components/Employees/Button";
import Axios from "axios";
import {
  StyledButton,
  Container,
} from "components/Employees/EmployeeDetails.style";
import ConfirmationModal from "components/ConfirmationModal/ConfirmationModal";
import { ConfirmationModalCtx } from "context/ConfirmationModalCtx";

const EmployeeDetails = ({ employeeDetails, setEmployeeDetails }: any) => {
  const { handleShowModal, response } = useContext(ConfirmationModalCtx);

  const [selectedEmployee, setSelectedEmployee] = useState(0);

  const handleUpdateUserDetails = () => {
    Axios.post("https://gernagroup-server.herokuapp.com/update-employee-information", {
      data: employeeDetails,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteEmployee = (id: number) => {
    setSelectedEmployee(id);
    handleShowModal();
  };

  useEffect(() => {
    if (response === 0) {
      Axios.post("https://gernagroup-server.herokuapp.com/delete-employee", {
        id: selectedEmployee,
      });
    }
  }, [response, selectedEmployee]);

  return (
    <ContentWrapper secondary={true}>
      <ConfirmationModal />
      <Container>
        <h3>Employee Details</h3>
        <StyledButton onClick={() => handleDeleteEmployee(employeeDetails.id)}>
          Fire employee
        </StyledButton>
      </Container>
      <EmployeeInformation
        label="Full name"
        value={employeeDetails.name}
        name="name"
        setEmployeeDetails={setEmployeeDetails}
      />
      <EmployeeInformation
        label="Age"
        name="age"
        value={employeeDetails?.age}
        setEmployeeDetails={setEmployeeDetails}
      />
      <EmployeeInformation
        label="Address"
        name="address"
        value={employeeDetails?.address}
        setEmployeeDetails={setEmployeeDetails}
      />
      <EmployeeInformation
        label="City"
        name="city"
        value={employeeDetails?.city}
        setEmployeeDetails={setEmployeeDetails}
      />
      <EmployeeInformation
        label="Phone Number"
        name="phone_number"
        value={employeeDetails?.phone_number}
        setEmployeeDetails={setEmployeeDetails}
      />
      <EmployeeInformation
        label="Position"
        name="position"
        value={employeeDetails?.position}
        setEmployeeDetails={setEmployeeDetails}
      />
      <EmployeeInformation
        label="Salary"
        name="salary"
        value={employeeDetails?.salary}
        setEmployeeDetails={setEmployeeDetails}
      />
      <Button text="Save" onClick={handleUpdateUserDetails} />
    </ContentWrapper>
  );
};

export default EmployeeDetails;
