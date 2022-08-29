import { useState, useEffect } from "react";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import Header from "components/Dashboard/Header";
import Table from "components/Dashboard/Table";
import axios from "axios";
import { Salers, AxiosResponse } from "types/types";
import useAxios from "hooks/useAxios";
import Error from 'components/Error/Error';

const TopSalers = () => {
  const [topSalers, setTopSalers] = useState<Salers[]>([]);

  const { response, error }: AxiosResponse = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "top-salers",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        "Access-Control-Allow-Origin": "*",
      },
    },
  });

  useEffect(() => {
    setTopSalers(response);
  }, [response]);

  return (
    <ContentWrapper>
      <Header title="Top salers" />
      <Table>
        <th>Name</th>
        <th>Sold cars</th>
        <th>Total Income</th>
        {error !== 'canceled' && <Error />}
        {topSalers.map((saler: Salers) => {
          return (
            <tr key={saler.id * 100}>
              <td>{saler.name}</td>
              <td>{saler.totalSales}</td>
              <td>${saler.totalIncome}</td>
            </tr>
          );
        })}
      </Table>
    </ContentWrapper>
  );
};

export default TopSalers;
