import Wrapper from "components/Dashboard/Wrapper";
import { DepartmentNav } from 'components/Employees/Employees.style';

const Employees = () => {
  return (
    <>
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
      </DepartmentNav>
      <Wrapper>
        <h1>Employees</h1>
      </Wrapper>
    </>
  );
};

export default Employees;
