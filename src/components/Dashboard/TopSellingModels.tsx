import ContentWrapper from 'components/Dashboard/ContentWrapper';
import { Header, Table } from 'components/Dashboard/TopSellingModels.style';

const TopSellingModels = () => {
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
        <tr>
            <td>Audi A4</td>
            <td>$45,254</td>
            <td>275</td>
            <td>$12,444,85</td>
        </tr>
        <tr>
            <td>BMW M3</td>
            <td>$53,547</td>
            <td>246</td>
            <td>$11,154,56</td>
        </tr>
        <tr>
            <td>BMW M3</td>
            <td>$53,547</td>
            <td>246</td>
            <td>$11,154,56</td>
        </tr>
        <tr>
            <td>BMW M3</td>
            <td>$53,547</td>
            <td>246</td>
            <td>$11,154,56</td>
        </tr>
        <tr>
            <td>BMW M3</td>
            <td>$53,547</td>
            <td>246</td>
            <td>$11,154,56</td>
        </tr>
      </Table>
    </ContentWrapper>
  );
};

export default TopSellingModels;
