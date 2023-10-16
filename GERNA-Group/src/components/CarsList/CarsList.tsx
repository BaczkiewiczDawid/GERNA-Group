import { useState, useEffect } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import SingleCar from "components/CarsList/SingleCar";
import {
  CarsContainer,
  StyledLink,
  ButtonLink,
} from "components/CarsList/CarsList.style";
import axios from "axios";
import Button from "components/Employees/Button";
import useAuth from "hooks/useAuth";
import { Car, AxiosResponse } from "types/types";
import useAxios from "hooks/useAxios";

const CarsList = () => {
  const [carsList, setCarsList] = useState<Car[]>([]);

  const isAuthenticated = useAuth();

  const { response, error }: AxiosResponse = useAxios({
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

  useEffect(() => {
    setCarsList(response);
  }, [response]);

  return (
    <Wrapper>
      <h1>GERNA Group Cars</h1>
      {isAuthenticated?.role === "admin" && (
        <ButtonLink to="/cars/new">
          <Button text="Add new car" />
        </ButtonLink>
      )}
      <CarsContainer>
        {carsList.map((car: Car) => {
          return (
            <StyledLink to={`/cars/${car.id}`}>
              <SingleCar
                key={car.id}
                id={car.id}
                manufactuer={car.manufactuer}
                model={car.model}
                price={car.price}
              />
            </StyledLink>
          );
        })}
      </CarsContainer>
    </Wrapper>
  );
};

export default CarsList;
