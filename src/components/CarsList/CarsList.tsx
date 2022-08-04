import Wrapper from "components/Dashboard/Wrapper";
import SingleCar from "components/CarsList/SingleCar";

const CarsList = () => {
  return (
    <Wrapper>
      <h1>GERNA Group Cars</h1>
      <SingleCar />
      <SingleCar />
      <SingleCar />
    </Wrapper>
  );
};

export default CarsList;
