import {
  Wrapper,
  InformationsContainer,
} from "components/Dashboard/Dashboard.style";
import Informations from "components/Dashboard/Informations";
import TotalRevenue from "components/Dashboard/TotalRevenue";

const Dashboard = () => {
  return (
    <Wrapper>
      <h1>GERNA Group Dashboard</h1>
      <InformationsContainer>
        <Informations />
        <Informations />
        <Informations />
      </InformationsContainer>
      <TotalRevenue />
    </Wrapper>
  );
};

export default Dashboard;
