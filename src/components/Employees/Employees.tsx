import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  DepartmentNav,
  Container,
  Content,
  ContentContainer,
  MobileButtonContainer,
} from "components/Employees/Employees.style";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import Table from "components/Dashboard/Table";
import Axios from "axios";
import EmployeeDetails from "components/Employees/EmployeeDetails";
import SingleEmployee from "components/Employees/SingleEmployee";
import SelectDepartment from "components/Employees/SelectDepartment";
import DepartmentNavigation from "components/Employees/DepartmentNavigation";
import Button from "components/Employees/Button";
import useAuth from "hooks/useAuth";
import NoAccess from "components/NoAccess/NoAccess";

interface Employee {
  id: number | undefined;
  address: string;
  age: number | undefined;
  city: string;
  department: string;
  email: string;
  name: string;
  phone_number: number | undefined;
  position: string;
  salary: number | undefined;
}

const initialState = {
  id: undefined,
  name: "",
  age: undefined,
  position: "",
  address: "",
  city: "",
  phone_number: undefined,
  email: "",
  salary: undefined,
  department: "katowice",
};

const Employees = () => {
  const [employeesList, setEmployeesList] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<number>(1);
  const [selectedUserDetails, setSelectedUserDetails] = useState<Employee>(initialState);

  const isAuthenticated = useAuth();

  const { department } = useParams();

  const getEmployeesList = () => {
    Axios.post("https://gernagroup-server.herokuapp.com/employees-list", {
      department: department,
    })
      .then((response) => {
        setEmployeesList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getEmployeeDetails = () => {
    Axios.post("https://gernagroup-server.herokuapp.com/employee-details", {
      selectedUser: selectedUser,
    })
      .then((response) => {
        setSelectedUserDetails(response.data[0]);
        console.log(response.data[0])
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEmployeesList();
  }, [department]);

  useEffect(() => {
    getEmployeeDetails();
  }, [selectedUser]);

  const handleSelectEmployee = (employeeID: number) => {
    setSelectedUser(employeeID);
  };

  return (
    <Container>
      {isAuthenticated?.role === "admin" ? (
        <>
          <DepartmentNav>
            <h2>Department</h2>
            <SelectDepartment />
            <DepartmentNavigation />
          </DepartmentNav>
          <ContentContainer>
            <h1>GERNA Group Employees - Katowice</h1>
            <Content>
              <ContentWrapper>
                <Table>
                  {employeesList.length < 1 ? (
                    <span>There's no employees in this department</span>
                  ) : (
                    <>
                      {" "}
                      <th>Employee name</th>
                      <th>Age</th>
                      <th>City</th>
                      <th>Position</th>
                      {employeesList.map((employee): any => {
                        return (
                          <SingleEmployee
                            employee={employee}
                            handleSelectEmployee={handleSelectEmployee}
                          />
                        );
                      })}
                    </>
                  )}
                </Table>
                <MobileButtonContainer>
                  <Link to="/employees/new">
                    <Button text="Add new employee" />
                  </Link>
                </MobileButtonContainer>
              </ContentWrapper>
              <EmployeeDetails
                employeeDetails={selectedUserDetails}
                setEmployeeDetails={setSelectedUserDetails}
              />
            </Content>
          </ContentContainer>
        </>
      ) : (
        <NoAccess />
      )}
    </Container>
  );
};

export default Employees;
