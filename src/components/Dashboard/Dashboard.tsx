import {
  Wrapper,
  InformationsContainer,
} from "components/Dashboard/Dashboard.style";
import Informations from "components/Dashboard/Informations";

const Dashboard = () => {
  return (
    <Wrapper>
    <h1>GERNA Group Dashboard</h1>
      <InformationsContainer>
        <Informations />
        <Informations />
        <Informations />
      </InformationsContainer>
    </Wrapper>
  );
};

export default Dashboard;
