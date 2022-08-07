import Wrapper from "components/Dashboard/Wrapper";
import { useParams } from "react-router-dom";
import carImg from "assets/images/audi-a4.png";
import {
  CarContainer,
  ModelInfo,
  Description,
  Details,
} from "components/CarsList/CarDetails.style";

const CarDetails = () => {
  const carID: any = useParams().id;

  return (
    <Wrapper>
      <h1>GERNA Group Cars</h1>
      <CarContainer>
        <img src={carImg} alt="Car" />
        <Details>
          <ModelInfo>
            <h2>Audi A4</h2>
            <p>2.0T 240KM</p>
          </ModelInfo>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            pulvinar eros ut luctus feugiat. Proin turpis nibh, rutrum nec nulla
            nec, euismod commodo tortor. Nam iaculis purus eget leo efficitur
            accumsan. Duis sed nunc sed tellus vulputate viverra. Etiam odio
            sapien, consectetur non dui eu, semper porttitor dui. Sed venenatis
            erat quis condimentum luctus. Nulla consequat mattis enim a euismod.
          </Description>
          <span>$53215</span>
        </Details>
      </CarContainer>
      <CarContainer secondary>
        <img src={carImg} alt="Car" />
        <Details secondary>
          <h3>Equipment</h3>
          <ul>
            <li>Heated seats</li>
            <li>Xenon lights</li>
            <li>Heated seats</li>
            <li>Xenon lights</li>
            <li>Heated seats</li>
            <li>Xenon lights</li>
            <li>Heated seats</li>
            <li>Xenon lights</li>
            <li>Heated seats</li>
            <li>Xenon lights</li>
          </ul>
        </Details>
      </CarContainer>
    </Wrapper>
  );
};

export default CarDetails;
