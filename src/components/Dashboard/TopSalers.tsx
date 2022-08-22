import { useState, useEffect } from "react";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import Header from "components/Dashboard/Header";
import Table from "components/Dashboard/Table";
import Axios from "axios";

interface Salers {
  id: number;
  name: string;
  totalSales: number;
  totalIncome: string;
}

const TopSalers = () => {
  const [topSalers, setTopSalers] = useState<Salers[]>([]);

  const getTopSalers = () => {
    Axios.get("https://gernagroup-server.herokuapp.com/top-salers")
      .then((response) => {
        console.log(response);
        setTopSalers(response.data)
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  useEffect(() => {
    getTopSalers();
  }, [])

  return (
    <ContentWrapper>
      <Header title="Top salers" />
      <Table>
        <th>Name</th>
        <th>Sold cars</th>
        <th>Total Income</th>
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
