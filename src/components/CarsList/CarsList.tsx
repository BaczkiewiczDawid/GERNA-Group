import { useState, useEffect } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import SingleCar from "components/CarsList/SingleCar";
import { CarsContainer } from "components/CarsList/CarsList.style";
import Axios from "axios";

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

  console.log(carsList);

  return (
    <Wrapper>
      <h1>GERNA Group Cars</h1>
      <CarsContainer>
        {carsList.map((car: any) => {
          return (
            <SingleCar
              id={car.id}
              manufactuer={car.manufactuer}
              model={car.model}
              price={car.price}
            />
          );
        })}
        {/* <SingleCar />
        <SingleCar />
        <SingleCar /> */}
      </CarsContainer>
    </Wrapper>
  );
};

export default CarsList;