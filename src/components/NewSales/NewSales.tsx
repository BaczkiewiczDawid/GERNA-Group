import { useState, useEffect } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import Button from "components/Employees/Button";
import DepartmentsList from "data/DepartmentsList";
import Axios from "axios";
import { Label } from "components/NewSales/NewSales.style";
import Modal from "components/Modal/Modal";
import useModal from "hooks/useModal";
import Select from "components/Select/Select";
import useAuth from "hooks/useAuth";
import { Car, Employee, AxiosResponse } from "types/types";
import useAxios from "hooks/useAxios";
import axios from "axios";
import Error from "components/Error/Error";

const NewSales = () => {
  const [carsList, setCarsList] = useState<any[]>([]);
  const [selectedDepartment, setSelectedDepartment] = useState("katowice");
  const [employeesList, setEmployeesList] = useState<Employee[]>([]);
  const [selectedValues, setSelectedValues] = useState({
    car: "",
    department: "katowice",
    saler: "",
  });

  const isAuthenticated = useAuth();

  const { showModal, modalInformation, setModalInformation, ResultType } =
    useModal();

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

  const { response: employeesListResponse, error: employeesListError, refetch }: AxiosResponse =
    useAxios({
      axiosInstance: axios,
      method: "POST",
      url: "employees-list",
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          "Access-Control-Allow-Origin": "*",
        },
        data: selectedDepartment,
      },
    });

  const { response: carsListResponse, error: carsListError }: AxiosResponse = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "get-cars",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        "Access-Control-Allow-Origin": "*",
      },
    },
  });

  const { error: newSaleError, refetch: newSaleRefetch }: AxiosResponse = useAxios({
    axiosInstance: axios,
    method: "POST",
    url: "new-sale",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        "Access-Control-Allow-Origin": "*",
      },
      data: selectedValues,
    },
  });

  useEffect(() => {
    setSelectedValues((prevState) => ({
      ...prevState,
      car: carsList[0]?.id,
    }));
    setEmployeesList(employeesListResponse);
    setSelectedValues((prevState) => ({
      ...prevState,
      saler: employeesListResponse[0]?.id,
    }));
    setCarsList(
      carsListResponse.sort((a, b) =>
        a.manufactuer.localeCompare(b.manufactuer)
      )
    );
  }, [carsList, employeesListResponse, carsListResponse]);

  useEffect(() => {
    refetch()
  }, [selectedDepartment])

  const handleNewSale = () => {
    newSaleRefetch();

    if (!newSaleError) {
      showModal(ResultType.success, "New sale added successfully!");
    } else {
      showModal(ResultType.error, "Something went wrong");
    }
  };

  return (
    <Wrapper>
      <h1>Add new sale</h1>
      <ContentWrapper>
        <Label>Select car</Label>
        <Select name="car" title="car" onChange={handleSetValues}>
          {carsList.map((car: Car) => {
            return (
              <option key={car.id} value={car?.id}>
                {car?.manufactuer} {car?.model}
              </option>
            );
          })}
        </Select>

        <Label>Department</Label>
        <Select name="department" title="department" onChange={handleSetValues}>
          {DepartmentsList.map((department) => {
            return (
              <option key={department.name} value={department.link}>
                {department.name}
              </option>
            );
          })}
        </Select>
        <Label>Saler</Label>
        <Select name="saler" title="saler" onChange={handleSetValues}>
          {employeesList.map((employee: Employee) => {
            return (
              <option key={employee?.id} value={employee?.id}>
                {employee?.name}
              </option>
            );
          })}
        </Select>
        <Button text="New sale" onClick={() => handleNewSale()} />
      </ContentWrapper>
      <Modal
        setIsOpen={setModalInformation}
        isOpen={modalInformation.isOpen}
        message={modalInformation.message}
        type={modalInformation.type}
      />
    </Wrapper>
  );
};

export default NewSales;
