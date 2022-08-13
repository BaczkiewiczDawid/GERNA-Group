import { useState, useEffect } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import SingleCar from "components/CarsList/SingleCar";
import { CarsContainer, StyledLink, ButtonLink } from "components/CarsList/CarsList.style";
import Axios from "axios";
import Button from "components/Employees/Button";
import { Link } from "react-router-dom";

const CarsList = () => {
  const [carsList, setCarsList] = useState([]);

  const getCarsList = () => {
    Axios.get("http://localhost:3001/get-cars")
      .then((response) => {
        setCarsList(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCarsList();
  }, []);

  return (
    <Wrapper>
      <h1>GERNA Group Cars</h1>
      <ButtonLink to="/cars/new">
        <Button text="Add new car" />
      </ButtonLink>
      <CarsContainer>
        {carsList.map((car: any) => {
          return (
            <StyledLink to={`/cars/${car.id}`}>
              <SingleCar
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
