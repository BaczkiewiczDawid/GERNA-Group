import React, { useState } from "react";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import EmployeeInformation from "components/Employees/EmployeeInformation";
import Button from "components/Employees/Button";
import Axios from "axios";
import {
  StyledButton,
  Container,
} from "components/Employees/EmployeeDetails.style";
import ConfirmationModal from "components/ConfirmationModal/ConfirmationModal";

const EmployeeDetails = ({ employeeDetails, setEmployeeDetails }: any) => {
  const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
    useState<boolean>(false);

  const handleUpdateUserDetails = () => {
    Axios.post("http://localhost:3001/update-employee-information", {
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
    // Axios.post("http://localhost:3001/delete-employee", {
    //   id: id,
    // }).then((reponse) => {
    // })

    setIsConfirmationModalOpen(true);
  };

  return (
    <ContentWrapper secondary={true}>
      <ConfirmationModal
        isOpen={isConfirmationModalOpen}
        setIsOpen={setIsConfirmationModalOpen}
      />
      <Container>
        <h3>Employee Details</h3>
        <StyledButton
          onClick={(id) => handleDeleteEmployee(employeeDetails.id)}
        >
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
