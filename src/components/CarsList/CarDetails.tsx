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
import Axios from "axios";
import Button from "components/Employees/Button";
import { useNavigate } from "react-router-dom";
import useAuth from "hooks/useAuth";

interface Car {
  id: number;
  manufactuer: string;
  model: string;
  price: number;
  engine: string;
  equipment: any;
}

const CarDetails = () => {
  const carID: any = useParams().id;
  const [equipmentList, setEquipmentList] = useState([]);
  const [carDetails, setCarDetails] = useState<Car>();

  const isAuthenticated = useAuth();

  const navigate = useNavigate();

  const getCarDetails = () => {
    Axios.post("http://localhost:3001/car-details", {
      id: carID,
    }).then((response) => {
      setCarDetails(response.data[0]);
    });
  };

  useEffect(() => {
    getCarDetails();
  }, [carID]);

  const handleEquipmentList = async () => {
    const carEquipmentList = await JSON.parse(carDetails?.equipment);

    setEquipmentList(carEquipmentList);
  };

  const handleRemoveCar = () => {
    Axios.post("http://localhost:3001/remove-car", {
      carID: carID,
    })
      .then((response) => {
        console.log(response);
        navigate("/cars", { replace: true });
      })
      .catch((err) => {
        console.log(err);
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
      {isAuthenticated.role === "admin" && (
        <ButtonWrapper>
          <Button onClick={handleRemoveCar} text="Delete this car from offer" />
        </ButtonWrapper>
      )}
    </Wrapper>
  );
};

export default CarDetails;
