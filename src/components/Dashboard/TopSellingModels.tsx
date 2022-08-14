import { useState, useEffect } from "react";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import Table from "components/Dashboard/Table";
import Header from "components/Dashboard/Header";
import Axios from "axios";

interface Cars {
  id: number;
  manufactuer: string;
  model: string;
  price: number;
  sales: number;
}

const TopSellingModels = () => {
  const [topSellingModels, setTopSellingModels] = useState<Cars[]>([]);

  const getTopSellingModels = () => {
    Axios.get("http://localhost:3001/top-selling-models")
      .then((response) => {
        setTopSellingModels(response.data);
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  useEffect(() => {
    getTopSellingModels();
  }, []);

  return (
    <ContentWrapper>
      <Header title="Top selling models" />
      <Table>
        <th>Model</th>
        <th>Price</th>
        <th>Sold</th>
        <th>Income</th>
        {topSellingModels.map((car: Cars) => {
          return (
            <tr key={car.id}>
              <td>
                {car.manufactuer} {car.model}
              </td>
              <td>{car.price}</td>
              <td>{car.sales}</td>
              <td>${car.price * car.sales}</td>
            </tr>
          );
        })}
      </Table>
    </ContentWrapper>
  );
};

export default TopSellingModels;
