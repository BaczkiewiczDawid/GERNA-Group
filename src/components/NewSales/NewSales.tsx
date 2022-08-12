import { useState, useEffect } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import Button from "components/Employees/Button";
import DepartmentsList from "data/DepartmentsList";
import Axios from "axios";

interface Car {
  id: number;
  manufactuer: string;
  model: string;
  price: number;
  equipment: string[];
}

interface Employee {
    id: number,
    name: string,
    age: number,
    position: string,
}

const NewSales = () => {
  const [carsList, setCarsList] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [employeesList, setEmployeesList] = useState<Employee[]>([]);

  const handleSelectedDepartment = (e: any) => {
    setSelectedDepartment(e.target.value);
  };

  const getCarsList = () => {
    Axios.get("http://localhost:3001/get-cars")
      .then((response) =>
        setCarsList(
          response.data.sort((a: any, b: any) =>
            a.manufactuer.localeCompare(b.manufactuer)
          )
        )
      )
      .catch((err) => {
        console.log(err);
      });
  };

  const getEmployeesList = () => {
    Axios.post("http://localhost:3001/employees-list", {
      department: selectedDepartment,
    })
      .then((response) => {
        setEmployeesList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCarsList();
    getEmployeesList();
  }, [selectedDepartment]);

  return (
    <Wrapper>
      <h1>Add new sale</h1>
      <ContentWrapper>
        <label>Select car</label>
        <select name="car">
          {carsList.map((car: Car) => {
            return (
              <option key={car.id} value={car?.manufactuer + car?.model}>
                {car?.manufactuer} {car?.model}
              </option>
            );
          })}
        </select>

        <label>Department</label>
        <select name="department" onChange={(e) => handleSelectedDepartment(e)}>
          {DepartmentsList.map((department) => {
            return (
              <option key={department.name} value={department.name}>
                {department.name}
              </option>
            );
          })}
        </select>
        <label>Saler</label>
        <select name="">
          {employeesList.map((employee: Employee) => {
            return (
              <option key={employee?.id} value={employee?.name}>
                {employee?.name}
              </option>
            );
          })}
        </select>
        <Button text="New sale" />
      </ContentWrapper>
    </Wrapper>
  );
};

export default NewSales;
