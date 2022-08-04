import ContentWrapper from "components/Dashboard/ContentWrapper";
import carImg from "assets/images/audi-a4.png";
import {
  ImageWrapper,
  Informations,
} from "components/CarsList/SingleCar.style";

const SingleCar = () => {
  return (
    <ContentWrapper>
      <h2>Audi A4</h2>
      <ImageWrapper>
        <img src={carImg} alt="Audi A4" />
      </ImageWrapper>
      <Informations>
        <p>$53,312</p>
        <p>Total sold: 53</p>
      </Informations>
    </ContentWrapper>
  );
};

export default SingleCar;
