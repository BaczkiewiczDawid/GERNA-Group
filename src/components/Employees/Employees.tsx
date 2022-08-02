import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
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
import EmployeeDetails from 'components/Employees/EmployeeDetails';

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
        <select name="deparment">
          <option value="katowice">Katowice</option>
          <option value="wroclaw">Wrocław</option>
          <option value="olsztyn">Olsztyn</option>
          <option value="krakow">Kraków</option>
          <option value="warszawa">Warszawa</option>
          <option value="gdansk">Gdańsk</option>
        </select>
        <LinksContainer>
          <Link to="/employees/katowice">GERNA Group Katowice</Link>
          <Link to="/employees/wroclaw">GERNA Group Wrocław</Link>
          <Link to="/employees/olsztyn">GERNA Group Olsztyn</Link>
          <Link to="/employees/krakow">GERNA Group Kraków</Link>
          <Link to="/employees/warszawa">GERNA Group Warszawa</Link>
          <Link to="/employees/gdansk">GERNA Group Gdańsk</Link>
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
                  <tr
                    key={employee.id * 5000}
                    onClick={(employeeID) => handleSelectEmployee(employee.id)}
                  >
                    <td>{employee.name}</td>
                    <td>{employee.age}</td>
                    <td>{employee.age}</td>
                    <td>{employee.position}</td>
                  </tr>
                );
              })}
            </Table>
          </ContentWrapper>
          <EmployeeDetails selectedUserDetails={selectedUserDetails} setSelectedUserDetails={setSelectedUserDetails} />
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Employees;
