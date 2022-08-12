import Wrapper from "components/Dashboard/Wrapper";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import Button from 'components/Employees/Button';

const NewSales = () => {
  return (
    <Wrapper>
      <h1>Add new sale</h1>
      <ContentWrapper>
        <label>Select car</label>
        <select name="">
          <option value="">Audi A4</option>
        </select>
        <label>Department</label>
        <select name="">
          <option value="">Audi A4</option>
        </select>
        <label>Saler</label>
        <select name="">
          <option value="">Audi A4</option>
        </select>
        <Button text="New sale" />
      </ContentWrapper>
    </Wrapper>
  );
};

export default NewSales;
