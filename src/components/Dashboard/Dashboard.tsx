import {
  Wrapper,
  Informations,
  InformationsContainer,
  FinancialDetails,
  Count
} from "components/Dashboard/Dashboard.style";

const Dashboard = () => {
  return (
    <Wrapper>
    <h1>GERNA Group Dashboard</h1>
      <InformationsContainer>
        <Informations>
          <h2>New sales</h2>
          <Count>261</Count>
          <FinancialDetails>
            +13% <span>(30 days)</span>
          </FinancialDetails>
        </Informations>
        <Informations>
          <h2>New sales</h2>
          <Count>261</Count>
          <FinancialDetails>
            +13% <span>(30 days)</span>
          </FinancialDetails>
        </Informations>
        <Informations>
          <h2>New sales</h2>
          <Count>261</Count>
          <FinancialDetails>
            +13% <span>(30 days)</span>
          </FinancialDetails>
        </Informations>
      </InformationsContainer>
    </Wrapper>
  );
};

export default Dashboard;
