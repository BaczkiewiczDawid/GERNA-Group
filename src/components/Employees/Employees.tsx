import Wrapper from "components/Dashboard/Wrapper";
import { DepartmentNav, Container, LinksContainer, Content } from "components/Employees/Employees.style";
import { Link } from "react-router-dom";

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
      <Content>
        <h1>GERNA Group Employees - Katowice</h1>
      </Content>
    </Container>
  );
};

export default Employees;
