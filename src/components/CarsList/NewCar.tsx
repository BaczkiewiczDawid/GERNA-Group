import { useState } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import Input from "components/Employees/Input";
import { Form, Label } from "components/CarsList/NewCar.style";
import manufactuersList from "data/ManufactuersList";

const NewCar = () => {
  const initialValue = {
    manufactuer: "Audi",
    model: "",
    engine: "",
    price: "",
  };

  const [inputValues, setInputValues] = useState(initialValue);

  const handleChangeInputValue = (e: any) => {
    setInputValues((prevState): any => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(inputValues);

  return (
    <Wrapper>
      <h1>Add new car to offer</h1>
      <ContentWrapper>
        <Form>
          <Label htmlFor="">Manufactuer</Label>
          <select name="manufactuer" onChange={(e: any) => handleChangeInputValue(e)}>
            {manufactuersList.map((manufactuer: string) => {
              return <option value={manufactuer}>{manufactuer}</option>;
            })}
          </select>
          <Label>Model</Label>
          <Input
            type="text"
            value={inputValues.model}
            onChange={(e: any) => handleChangeInputValue(e)}
            name="model"
          />
          <Label>Engine</Label>
          <Input
            type="text"
            value={inputValues.engine}
            onChange={(e: any) => handleChangeInputValue(e)}
            name="engine"
          />
          <Label>Price</Label>
          <Input
            type="number"
            value={inputValues.price}
            onChange={(e: any) => handleChangeInputValue(e)}
            name="price"
          />
        </Form>
      </ContentWrapper>
    </Wrapper>
  );
};

export default NewCar;
