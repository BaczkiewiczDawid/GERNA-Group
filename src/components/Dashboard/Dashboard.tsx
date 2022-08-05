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
  const [sales, setSales] = useState<number>(0);
  const [recentIncome, setRecentIncome] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);

  const getLastSales = () => {
    Axios.get("http://localhost:3001/recent-sales").then((response) => {
      setSales(response.data[0].sales);
    });
  };

  const getRecentIncome = () => {
    Axios.get("http://localhost:3001/recent-income").then((response) => {
      setRecentIncome(response.data[0].totalIncome);
    });
  };

  const getTotalIncome = () => {
    Axios.get("http://localhost:3001/total-income").then((response) => {
      setTotalIncome(response.data[0].totalIncome);
      console.log(response.data[0]);
    });
  };

  useEffect(() => {
    getLastSales();
    getRecentIncome();
    getTotalIncome();
  }, []);

  return (
    <Wrapper>
      <h1>GERNA Group Dashboard</h1>
      <InformationsContainer>
        <Informations title="New sales" count={sales} />
        <Informations title="Income" count={`$${recentIncome}`} />
        <Informations title="Total income" count={`$${totalIncome}`} />
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
