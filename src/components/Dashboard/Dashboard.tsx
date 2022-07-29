import {
  Wrapper,
  InformationsContainer,
  Container
} from "components/Dashboard/Dashboard.style";
import Informations from "components/Dashboard/Informations";
import TotalRevenue from "components/Dashboard/TotalRevenue";
import TopSellingModels from "components/Dashboard/TopSellingModels";

const Dashboard = () => {
  return (
    <Wrapper>
      <h1>GERNA Group Dashboard</h1>
      <InformationsContainer>
        <Informations />
        <Informations />
        <Informations />
      </InformationsContainer>
      <Container>
        <TotalRevenue />
        <TopSellingModels />
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
