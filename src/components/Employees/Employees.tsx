import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  DepartmentNav,
  Container,
  LinksContainer,
  Content,
  ContentContainer,
} from "components/Employees/Employees.style";
import { Link } from "react-router-dom";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import Table from "components/Dashboard/Table";
import Axios from "axios";
import EmployeeDetails from "components/Employees/EmployeeDetails";
import SingleEmployee from "components/Employees/SingleEmployee";
import SelectDepartment from "components/Employees/SelectDepartment";
import Button from "components/Employees/Button";

const Employees = () => {
  const [employeesList, setEmployeesList] = useState<any[]>([]);
  const [selectedUser, setSelectedUser] = useState<number>(1);
  const [selectedUserDetails, setSelectedUserDetails] = useState<any[]>([]);

  const { department } = useParams();
  console.log(department);

  const getEmployeesList = () => {
    Axios.post("http://localhost:3001/employees-list", {
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
    Axios.post("http://localhost:3001/employee-details", {
      selectedUser: selectedUser,
    })
      .then((response) => {
        setSelectedUserDetails(response.data[0]);
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
      <DepartmentNav>
        <h2>Department</h2>
        <SelectDepartment />
        <LinksContainer>
          <Link to="/employees/katowice">GERNA Group Katowice</Link>
          <Link to="/employees/wroclaw">GERNA Group Wrocław</Link>
          <Link to="/employees/olsztyn">GERNA Group Olsztyn</Link>
          <Link to="/employees/krakow">GERNA Group Kraków</Link>
          <Link to="/employees/warszawa">GERNA Group Warszawa</Link>
          <Link to="/employees/gdansk">GERNA Group Gdańsk</Link>
          <Link to="/employees/new">
            <Button text="Add new employee" />
          </Link>
        </LinksContainer>
      </DepartmentNav>
      <ContentContainer>
        <h1>GERNA Group Employees - Katowice</h1>
        <Content>
          <ContentWrapper>
            <Table>
              <th>Employee name</th>
              <th>Age</th>
              <th>Experience</th>
              <th>Total Sales</th>
              {employeesList.map((employee): any => {
                return (
                  <SingleEmployee
                    employee={employee}
                    handleSelectEmployee={handleSelectEmployee}
                  />
                );
              })}
            </Table>
          </ContentWrapper>
          <EmployeeDetails
            employeeDetails={selectedUserDetails}
            setEmployeeDetails={setSelectedUserDetails}
          />
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Employees;
