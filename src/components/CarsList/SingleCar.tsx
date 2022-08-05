import ContentWrapper from "components/Dashboard/ContentWrapper";
import carImg from "assets/images/audi-a4.png";
import {
  ImageWrapper,
  Informations,
  Price,
} from "components/CarsList/SingleCar.style";

interface Car {
  manufactuer: string,
  model: string,
  price: number
}

const SingleCar = ({ manufactuer, model, price }: Car) => {
  return (
    <ContentWrapper>
      <h2>{manufactuer} {model}</h2>
      <ImageWrapper>
        <img src={carImg} alt={`${manufactuer} ${model}`} />
      </ImageWrapper>
      <Informations>
        <Price>${price}</Price>
        <p>Total sold: 53</p>
      </Informations>
    </ContentWrapper>
  );
};

export default SingleCar;
