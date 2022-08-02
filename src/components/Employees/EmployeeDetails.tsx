import React, { useState } from "react";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import EmployeeInformation from "components/Employees/EmployeeInformation";
import Button from "components/Employees/Button";
import Axios from "axios";

const EmployeeDetails = ({
  selectedUserDetails,
  setSelectedUserDetails,
}: any) => {
  const handleUpdateUserDetails = () => {
    // Axios post...
    Axios.post("http://localhost:3001/update-employee-information", {
      data: selectedUserDetails,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(selectedUserDetails);

  return (
    <ContentWrapper secondary={true}>
      <h3>Employee Details</h3>
      <EmployeeInformation
        label="Full name"
        value={selectedUserDetails.name}
        name="name"
        setSelectedUserDetails={setSelectedUserDetails}
      />
      <EmployeeInformation
        label="Age"
        name="age"
        value={selectedUserDetails?.age}
        setSelectedUserDetails={setSelectedUserDetails}
      />
      <EmployeeInformation
        label="Address"
        name="address"
        value={selectedUserDetails?.address}
        setSelectedUserDetails={setSelectedUserDetails}
      />
      <EmployeeInformation
        label="City"
        name="city"
        value={selectedUserDetails?.city}
        setSelectedUserDetails={setSelectedUserDetails}
      />
      <EmployeeInformation
        label="Phone Number"
        name="phone_number"
        value={selectedUserDetails?.phone_number}
        setSelectedUserDetails={setSelectedUserDetails}
      />
      <EmployeeInformation
        label="Position"
        name="position"
        value={selectedUserDetails?.position}
        setSelectedUserDetails={setSelectedUserDetails}
      />
      <EmployeeInformation
        label="Salary"
        name="salary"
        value={selectedUserDetails?.salary}
        setSelectedUserDetails={setSelectedUserDetails}
      />
      <Button text="Save" onClick={handleUpdateUserDetails} />
    </ContentWrapper>
  );
};

export default EmployeeDetails;
