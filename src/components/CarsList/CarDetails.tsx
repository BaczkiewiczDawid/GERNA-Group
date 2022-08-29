import { useState, useEffect } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import { useParams } from "react-router-dom";
import carImg from "assets/images/audi-a4.png";
import {
  CarContainer,
  ModelInfo,
  Description,
  Details,
  List,
  ListItem,
  ButtonWrapper,
} from "components/CarsList/CarDetails.style";
import axios from "axios";
import Button from "components/Employees/Button";
import { useNavigate } from "react-router-dom";
import useAuth from "hooks/useAuth";
import { Car, AxiosResponse } from "types/types";
import useAxios from "hooks/useAxios";
import { useStateWithCallbackLazy } from "use-state-with-callback";

const CarDetails = () => {
  const carID: any = useParams().id;
  const [car, setCar] = useStateWithCallbackLazy<number>(0);
  const [equipmentList, setEquipmentList] = useState<string[]>([]);
  const [carDetails, setCarDetails] = useState<Car>();

  const isAuthenticated = useAuth();

  const navigate = useNavigate();

  const {
    response: carDetailsResponse,
    error: carDetailsError,
    refetch: carDetailsRefetch,
  }: AxiosResponse = useAxios({
    axiosInstance: axios,
    method: "POST",
    url: "car-details",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        "Access-Control-Allow-Origin": "*",
      },
      data: carID,
    },
  });

  const {
    response: removeCarResponse,
    error: removeCarError,
    refetch: removeCarRefetch,
  }: AxiosResponse = useAxios({
    axiosInstance: axios,
    method: "POST",
    url: "remove-car",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        "Access-Control-Allow-Origin": "*",
      },
      data: car,
    },
  });

  useEffect(() => {
    setCarDetails(carDetailsResponse[0]);
  }, [carDetailsResponse]);

  const handleEquipmentList = async () => {
    const carEquipmentList = await JSON.parse(carDetails?.equipment);

    setEquipmentList(carEquipmentList);
  };

  const handleRemoveCar = () => {
    setCar(carID, () => {
      removeCarRefetch();
      navigate("/cars", { replace: true });
    });
  };

  handleEquipmentList();

  return (
    <Wrapper>
      <h1>GERNA Group Cars</h1>
      <CarContainer>
        <img src={carImg} alt="Car" />
        <Details>
          <ModelInfo>
            <h2>
              {carDetails?.manufactuer} {carDetails?.model}
            </h2>
            <p>{carDetails?.engine}</p>
          </ModelInfo>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            pulvinar eros ut luctus feugiat. Proin turpis nibh, rutrum nec nulla
            nec, euismod commodo tortor. Nam iaculis purus eget leo efficitur
            accumsan. Duis sed nunc sed tellus vulputate viverra. Etiam odio
            sapien, consectetur non dui eu, semper porttitor dui. Sed venenatis
            erat quis condimentum luctus. Nulla consequat mattis enim a euismod.
          </Description>
          <span>${carDetails?.price}</span>
        </Details>
      </CarContainer>
      <CarContainer secondary>
        <img src={carImg} alt="Car" />
        <Details secondary>
          <h3>Equipment</h3>
          <List>
            {equipmentList.map((el: string) => {
              return <ListItem key={el}>{el}</ListItem>;
            })}
          </List>
        </Details>
      </CarContainer>
      {isAuthenticated?.role === "admin" && (
        <ButtonWrapper>
          <Button onClick={handleRemoveCar} text="Delete this car from offer" />
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};

export default CarDetails;
