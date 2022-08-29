import { useState, useEffect } from "react";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import Table from "components/Dashboard/Table";
import Header from "components/Dashboard/Header";
import axios from "axios";
import { Car, AxiosResponse } from "types/types";
import useAxios from "hooks/useAxios";
import Error from 'components/Error/Error';

const TopSellingModels = () => {
  const [topSellingModels, setTopSellingModels] = useState<Car[]>([]);

  const { response, error }: AxiosResponse = useAxios({
    axiosInstance: axios,
    method: "GET",
    url: "top-selling-models",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        "Access-Control-Allow-Origin": "*",
      },
    },
  });

  useEffect(() => {
    setTopSellingModels(response);
  }, [response]);

  return (
    <ContentWrapper>
      <Header title="Top selling models" />
      <Table>
        <thead>
          <tr>
            <td>Model</td>
            <td>Price</td>
            <td>Sold</td>
            <td>Income</td>
          </tr>
        </thead>
        <tbody>
          {error !== 'canceled' && <Error />}
          {topSellingModels.map((car: Car) => {
            return (
              <tr key={car.id}>
                <td>
                  {car.manufactuer} {car.model}
                </td>
                <td>{car.price}</td>
                <td>{car.sales}</td>
                {car.sales && <td>${car.price * car.sales}</td>}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </ContentWrapper>
  );
};

export default TopSellingModels;
