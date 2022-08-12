import { useState, useEffect } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import Button from "components/Employees/Button";
import DepartmentsList from "data/DepartmentsList";
import Axios from "axios";
import { Label, Select } from "components/NewSales/NewSales.style";

interface Car {
  id: number;
  manufactuer: string;
  model: string;
  price: number;
  equipment: string[];
}

interface Employee {
  id: number;
  name: string;
  age: number;
  position: string;
}

const NewSales = () => {
  const [carsList, setCarsList] = useState<any[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState("katowice");
  const [employeesList, setEmployeesList] = useState<Employee[]>([]);
  const [selectedValues, setSelectedValues] = useState({
    car: "",
    department: "katowice",
    saler: "",
  });

  const handleSetValues = (e: any) => {
    if (e.target.name === "department") {
      setSelectedDepartment(e.target.value);
    }

    setSelectedValues((prevState: any) => ({
      ...prevState,
      [e.target.name]:
        e.target.name === "department"
          ? e.target.value
          : parseInt(e.target.value),
    }));
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
        setSelectedValues((prevState: any) => ({
          ...prevState,
          saler: response.data[0]?.id,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setSelectedValues((prevState: any) => ({
      ...prevState,
      car: carsList[0]?.id,
    }));
  }, [carsList]);

  useEffect(() => {
    getCarsList();
    getEmployeesList();
  }, [selectedDepartment]);

  console.log(selectedValues);

  return (
    <Wrapper>
      <h1>Add new sale</h1>
      <ContentWrapper>
        <Label>Select car</Label>
        <Select name="car" onChange={(e) => handleSetValues(e)}>
          {carsList.map((car: Car) => {
            return (
              <option key={car.id} value={car?.id}>
                {car?.manufactuer} {car?.model}
              </option>
            );
          })}
        </Select>

        <Label>Department</Label>
        <Select name="department" onChange={(e) => handleSetValues(e)}>
          {DepartmentsList.map((department) => {
            return (
              <option key={department.name} value={department.link}>
                {department.name}
              </option>
            );
          })}
        </Select>
        <Label>Saler</Label>
        <Select name="saler" onChange={(e) => handleSetValues(e)}>
          {employeesList.map((employee: Employee) => {
            return (
              <option key={employee?.id} value={employee?.id}>
                {employee?.name}
              </option>
            );
          })}
        </Select>
        <Button text="New sale" />
      </ContentWrapper>
    </Wrapper>
  );
};

export default NewSales;
