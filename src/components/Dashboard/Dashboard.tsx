import { useEffect, useState } from "react";
import {
  InformationsContainer,
  Container,
} from "components/Dashboard/Dashboard.style";
import Informations from "components/Dashboard/Informations";
import TotalRevenue from "components/Dashboard/TotalRevenue";
import TopSellingModels from "components/Dashboard/TopSellingModels";
import TopSalers from "components/Dashboard/TopSalers";
import Wrapper from "components/Dashboard/Wrapper";
import Axios from "axios";

const Dashboard = () => {
  const [sales, setSales] = useState<number>()

  const getLastSales = () => {
    Axios.get("http://localhost:3001/recent-sales").then((response) => {
      setSales(response.data[0].sales)
    });
  };

  useEffect(() => {
    getLastSales();
  }, []);

  return (
    <Wrapper>
      <h1>GERNA Group Dashboard</h1>
      <InformationsContainer>
        <Informations title="New sales" count={12} />
        <Informations title="Income" count={123} />
        <Informations title="Expenses" count={123} />
      </InformationsContainer>
      <Container>
        <TotalRevenue />
        <TopSellingModels />
        <TopSalers />
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
