import { useState } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import { Form, Label } from "components/CarsList/NewCar.style";
import manufactuersList from "data/ManufactuersList";
import FormElement from "components/CarsList/FormElement";
import Button from "components/Employees/Button";

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

  const handleAddNewCar = () => {
    console.log("New car added");
  };
  
  return (
    <Wrapper>
      <h1>Add new car to offer</h1>
      <ContentWrapper>
        <Form onSubmit={handleAddNewCar}>
          <Label htmlFor="">Manufactuer</Label>
          <select
            name="manufactuer"
            onChange={(e: any) => handleChangeInputValue(e)}
          >
            {manufactuersList.map((manufactuer: string) => {
              return <option value={manufactuer}>{manufactuer}</option>;
            })}
          </select>
          <FormElement
            label="Model"
            value={inputValues.model}
            type="text"
            name="model"
            placeholder="Model..."
            onChange={(e: any) => handleChangeInputValue(e)}
          />
          <FormElement
            label="engine"
            value={inputValues.engine}
            type="text"
            name="engine"
            placeholder="Engine..."
            onChange={(e: any) => handleChangeInputValue(e)}
          />
          <FormElement
            label="Price"
            value={inputValues.price}
            type="text"
            name="price"
            placeholder="Price..."
            onChange={(e: any) => handleChangeInputValue(e)}
          />
          <Button text="Add new car" type="submit" />
        </Form>
      </ContentWrapper>
    </Wrapper>
  );
};

export default NewCar;
