import { useEffect, useState } from "react";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import carImg from "assets/images/audi-a4.png";
import {
  ImageWrapper,
  Informations,
  Price,
} from "components/CarsList/SingleCar.style";
import Axios from "axios";

interface Car {
  id: number;
  manufactuer: string;
  model: string;
  price: number;
}

const SingleCar = ({ id, manufactuer, model, price }: Car) => {
  const [sales, setSales] = useState([]);

  const getSalesQuantity = () => {
    Axios.post("https://gernagroup-server.herokuapp.com/get-sales", {
      data: id,
    })
      .then((response) => {
        setSales(response.data[0].sales);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  useEffect(() => {
    getSalesQuantity();
  }, []);

  return (
    <ContentWrapper>
        <h2>
          {manufactuer} {model}
        </h2>
        <ImageWrapper>
          <img src={carImg} alt={`${manufactuer} ${model}`} />
        </ImageWrapper>
        <Informations>
          <Price data-testid="price">${price}</Price>
          <p>Total sold: {sales}</p>
        </Informations>
    </ContentWrapper>
  );
};

export default SingleCar;
