import React, { useState } from "react";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import EmployeeInformation from "components/Employees/EmployeeInformation";
import Button from "components/Employees/Button";

const EmployeeDetails = ({
  selectedUserDetails,
  setSelectedUserDetails,
}: any) => {
  const handleChangeUserDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedUserDetails((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <ContentWrapper secondary={true}>
      <h3>Employee Details</h3>
      <EmployeeInformation
        label="Full name"
        value={selectedUserDetails.name}
        name="name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeUserDetails(e)
        }
      />
      <EmployeeInformation
        label="Age"
        name="age"
        value={selectedUserDetails?.age}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeUserDetails(e)
        }
      />
      <EmployeeInformation
        label="Address"
        name="address"
        value={selectedUserDetails?.address}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeUserDetails(e)
        }
      />
      <EmployeeInformation
        label="City"
        name="city"
        value={selectedUserDetails?.city}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeUserDetails(e)
        }
      />
      <EmployeeInformation
        label="Phone Number"
        name="phone_number"
        value={selectedUserDetails?.phone_number}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeUserDetails(e)
        }
      />
      <EmployeeInformation
        label="Position"
        name="position"
        value={selectedUserDetails?.position}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeUserDetails(e)
        }
      />
      <EmployeeInformation
        label="Salary"
        name="salary"
        value={selectedUserDetails?.salary}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeUserDetails(e)
        }
      />
      <Button text="Save" />
    </ContentWrapper>
  );
};

export default EmployeeDetails;
