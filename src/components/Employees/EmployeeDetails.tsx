import ContentWrapper from "components/Dashboard/ContentWrapper";
import EmployeeInformation from "components/Employees/EmployeeInformation";

const EmployeeDetails = ({ selectedUserDetails }: any) => {
  return (
    <ContentWrapper secondary={true}>
      <h3>Employee Details</h3>
      <EmployeeInformation
        label="Full name"
        value={selectedUserDetails[0]?.name}
      />
      <EmployeeInformation label="Age" value={selectedUserDetails[0]?.age} />
      <EmployeeInformation
        label="Address"
        value={selectedUserDetails[0]?.address}
      />
      <EmployeeInformation label="City" value={selectedUserDetails[0]?.city} />
      <EmployeeInformation
        label="Phone Number"
        value={selectedUserDetails[0]?.phone_number}
      />
      <EmployeeInformation
        label="Position"
        value={selectedUserDetails[0]?.position}
      />
      <EmployeeInformation
        label="Salary"
        value={selectedUserDetails[0]?.salary}
      />
    </ContentWrapper>
  );
};

export default EmployeeDetails;
