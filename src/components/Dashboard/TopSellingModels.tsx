import { useState, useEffect } from "react";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import { Header, Table } from "components/Dashboard/TopSellingModels.style";
import Axios from "axios";

const TopSellingModels = () => {
  const [topSellingModels, setTopSellingModels] = useState([]);

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

  console.log(topSellingModels);

  return (
    <ContentWrapper>
      <Header>
        <h2>Top selling models</h2>
        <select name="time-period-filter" id="">
          <option value="yearly">Yearly</option>
          <option value="monthly">Monthly</option>
        </select>
      </Header>
      <Table>
        <th>Model</th>
        <th>Price</th>
        <th>Sold</th>
        <th>Income</th>
        {topSellingModels.map((car: any) => {
          return (
            <tr>
              <td>{car.manufactuer} {car.model}</td>
              <td>{car.price}</td>
              <td>{car.sales}</td>
              <td>${car.price * car.sales}</td>
            </tr>
          )
        })}
      </Table>
    </ContentWrapper>
  );
};

export default TopSellingModels;
