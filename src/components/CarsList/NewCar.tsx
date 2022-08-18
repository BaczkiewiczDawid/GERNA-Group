import { useState } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import { Form, Label, Container } from "components/CarsList/NewCar.style";
import FormElement from "components/CarsList/FormElement";
import Button from "components/Employees/Button";
import Axios from "axios";
import Modal from "components/Modal/Modal";
import useModal from "hooks/useModal";
import SelectManufactuer from "components/CarsList/SelectManufactuer";
import SelectEquipment from "components/CarsList/SelectEquipment";
import useAuth from "hooks/useAuth";
import NoAccess from "components/NoAccess/NoAccess";

const NewCar = () => {
  const initialValue = {
    manufactuer: "Audi",
    model: "",
    engine: "",
    price: "",
    equipment: [],
  };

  const isAuthenticated = useAuth();

  const { showModal, modalInformation, setModalInformation, ResultType } =
    useModal();

  const [selectedEquipment, setSelectedEquipment] = useState<any[]>([]);

  const [inputValues, setInputValues] = useState(initialValue);

  const handleChangeInputValue = (e: any) => {
    setInputValues((prevState): any => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAddNewCar = (e: Event) => {
    e.preventDefault();

    const val = Object.values(inputValues);
    const isNull = val.some((el) => el.length < 1);

    setInputValues((prevState: any) => ({
      ...prevState,
      equipment: selectedEquipment,
    }));

    if (!isNull) {
      Axios.post("http://localhost:3001/new-car", {
        data: inputValues,
      })
        .then((response) => {
          setInputValues(initialValue);
          setSelectedEquipment([]);
          showModal(ResultType.success, "New car added successfully!");
        })
        .catch((err) => {
          console.log(err);
          showModal(ResultType.error, "Something went wrong");
        });
    }
  };

  console.log(selectedEquipment);

  return (
    <Wrapper>
      {isAuthenticated.role === "admin" ? (
        <>
          <h1>Add new car to offer</h1>
          <Container>
            <ContentWrapper>
              <Form onSubmit={(e: any) => handleAddNewCar(e)}>
                <Label htmlFor="">Manufactuer</Label>
                <SelectManufactuer setInputValues={setInputValues} />
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
            <SelectEquipment
              selectedEquipment={selectedEquipment}
              setSelectedEquipment={setSelectedEquipment}
            />
          </Container>
          <Modal
            setIsOpen={setModalInformation}
            isOpen={modalInformation.isOpen}
            message={modalInformation.message}
            type={modalInformation.type}
          />
        </>
      ) : <NoAccess />}
    </Wrapper>
  );
};

export default NewCar;
