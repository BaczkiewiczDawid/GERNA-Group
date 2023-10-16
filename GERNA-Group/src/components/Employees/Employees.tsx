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
import axios from "axios";
import EmployeeDetails from "components/Employees/EmployeeDetails";
import SingleEmployee from "components/Employees/SingleEmployee";
import SelectDepartment from "components/Employees/SelectDepartment";
import DepartmentNavigation from "components/Employees/DepartmentNavigation";
import Button from "components/Employees/Button";
import useAuth from "hooks/useAuth";
import NoAccess from "components/NoAccess/NoAccess";
import { Employee } from "types/types";
import useAxios from "hooks/useAxios";
import Error from "components/Error/Error";

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
  const [employeesList, setEmployeesList] = useState<Employee[]>([]);
  const [selectedUser, setSelectedUser] = useState<number>(1);
  const [selectedUserDetails, setSelectedUserDetails] =
    useState<any>(initialState);

  const isAuthenticated = useAuth();

  const { department } = useParams();

  const {
    response: employeesListResponse,
    error: employeesListError,
    refetch: employessListRefetch,
  } = useAxios({
    axiosInstance: axios,
    method: "POST",
    url: "employees-list",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        "Access-Control-Allow-Origin": "*",
      },
      data: department,
    },
  });

  const {
    response: employeeDetailsResponse,
    error: employeeDetailsError,
    refetch,
  } = useAxios({
    axiosInstance: axios,
    method: "POST",
    url: "employee-details",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        "Access-Control-Allow-Origin": "*",
      },
      data: selectedUser,
    },
  });

  useEffect(() => {
    setEmployeesList(employeesListResponse);
    setSelectedUserDetails(employeeDetailsResponse[0]);
  }, [employeesListResponse, employeeDetailsResponse]);

  useEffect(() => {
    employessListRefetch();
  }, [department]);

  const handleSelectEmployee = (employeeID: number) => {
    setSelectedUser(employeeID);
    refetch();
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
                {employeeDetailsError ||
                employeeDetailsError ||
                employeesListError ? (
                  <Error />
                ) : null}
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
                            key={employee.id}
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
