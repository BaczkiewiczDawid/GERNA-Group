import Wrapper from "components/Dashboard/Wrapper";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const carID: any = useParams().id;

  return (
    <Wrapper>
      <p>ID: {carID}</p>
    </Wrapper>
  );
};

export default CarDetails;
