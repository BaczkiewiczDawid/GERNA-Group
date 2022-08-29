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
import axios from "axios";
import useAuth from "hooks/useAuth";
import { AxiosResponse } from 'types/types';
import useAxios from "hooks/useAxios";

const Dashboard = () => {
  const [sales, setSales] = useState<number>(0);
  const [recentIncome, setRecentIncome] = useState<number>(0);
  const [totalIncome, setTotalIncome] = useState<number>(0);

  const isAuthenticated = useAuth();

  const { response: recentSalesResponse, error: recentSalesError }: AxiosResponse =
    useAxios({
      axiosInstance: axios,
      method: "GET",
      url: "recent-sales",
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          "Access-Control-Allow-Origin": "*",
        },
      },
    });

  const { response: recentIncomeResponse, error: RecentIncomeResponse }: AxiosResponse =
    useAxios({
      axiosInstance: axios,
      method: "GET",
      url: "recent-income",
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          "Access-Control-Allow-Origin": "*",
        },
      },
    });

  const { response: totalIncomeResponse, error: totalIncomeError }: AxiosResponse =
    useAxios({
      axiosInstance: axios,
      method: "GET",
      url: "total-income",
      requestConfig: {
        headers: {
          "Content-Language": "en-US",
          "Access-Control-Allow-Origin": "*",
        },
      },
    });

  useEffect(() => {
    setSales(recentSalesResponse[0]?.sales);
    setRecentIncome(recentIncomeResponse[0]?.totalIncome);
    setTotalIncome(totalIncomeResponse[0]?.totalIncome);
  }, [recentSalesResponse, recentIncomeResponse, totalIncomeResponse]);

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
