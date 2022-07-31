import Wrapper from "components/Dashboard/Wrapper";
import {
  DepartmentNav,
  Container,
  LinksContainer,
  Content,
  ContentContainer
} from "components/Employees/Employees.style";
import { Link } from "react-router-dom";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import Table from "components/Dashboard/Table";

const Employees = () => {
  return (
    <Container>
      <DepartmentNav>
        <h2>Department</h2>
        <select name="deparment">
          <option value="katowice">Katowice</option>
          <option value="wroclaw">Wrocław</option>
          <option value="olsztyn">Olsztyn</option>
          <option value="krakow">Kraków</option>
          <option value="warszawa">Warszawa</option>
          <option value="gdansk">Gdańsk</option>
        </select>
        <LinksContainer>
          <Link to="/employees/katowice">GERNA Group Katowice</Link>
          <Link to="/employees/wroclaw">GERNA Group Wrocław</Link>
          <Link to="/employees/olsztyn">GERNA Group Olsztyn</Link>
          <Link to="/employees/krakow">GERNA Group Kraków</Link>
          <Link to="/employees/warszawa">GERNA Group Warszawa</Link>
          <Link to="/employees/gdansk">GERNA Group Gdańsk</Link>
        </LinksContainer>
      </DepartmentNav>
      <ContentContainer>
        <h1>GERNA Group Employees - Katowice</h1>
        <Content>
          <ContentWrapper>
            <Table>
              <th>Employee name</th>
              <th>Age</th>
              <th>Experience</th>
              <th>Total Sales</th>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>3 Years as Sales Specialist</td>
                <td>$634,234</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>3 Years as Sales Specialist</td>
                <td>$634,234</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>3 Years as Sales Specialist</td>
                <td>$634,234</td>
              </tr>
              <tr>
                <td>John Doe</td>
                <td>32</td>
                <td>3 Years as Sales Specialist</td>
                <td>$634,234</td>
              </tr>
            </Table>
          </ContentWrapper>
          <ContentWrapper secondary={true}>
            <label htmlFor="">Full name</label>
            <input type="text" />
          </ContentWrapper>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default Employees;
