import { useEffect, useState } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import {
  Form,
  Label,
  Container,
  EquipmentContainer,
} from "components/CarsList/NewCar.style";
import manufactuersList from "data/ManufactuersList";
import FormElement from "components/CarsList/FormElement";
import Button from "components/Employees/Button";
import Axios from "axios";
import Modal from "components/Modal/Modal";
import useModal from "hooks/useModal";
import EquipmentList from "data/EquipmentList";
import Dropdown from "components/CarsList/Dropdown";

const NewCar = () => {
  const initialValue = {
    manufactuer: "Audi",
    model: "",
    engine: "",
    price: "",
  };

  const { showModal, modalInformation, setModalInformation, ResultType } =
    useModal();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [equipmentInputValue, setEquipmentInputValue] = useState<string>("");
  const [selectedEquipment, setSelectedEquipment] = useState<any[]>([]);
  const [filteredEquipment, setFilteredEquipment] = useState([]);
  const [inputValues, setInputValues] = useState(initialValue);

  const handleChangeInputValue = (e: any) => {
    setInputValues((prevState): any => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleEquipmentList = (e: any) => {
    setEquipmentInputValue(e.target.value);

    const items: any = EquipmentList.filter(
      (item) =>
        item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    );

    if (items.length > 0) {
      setIsOpen(true);
    }

    setFilteredEquipment(items);
  };

  const handleAddNewCar = (e: Event) => {
    e.preventDefault();

    const val = Object.values(inputValues);
    const isNull = val.some((el) => el.length < 1);

    if (!isNull) {
      Axios.post("http://localhost:3001/new-car", {
        data: inputValues,
      })
        .then((response) => {
          setInputValues(initialValue);
          showModal(ResultType.success, "New car added successfully!");
        })
        .catch((err) => {
          console.log(err);
          showModal(ResultType.error, "Something went wrong");
        });
    }
  };

  return (
    <Wrapper>
      <h1>Add new car to offer</h1>
      <Container>
        <ContentWrapper>
          <Form onSubmit={(e: any) => handleAddNewCar(e)}>
            <Label htmlFor="">Manufactuer</Label>
            <select
              name="manufactuer"
              onChange={(e: any) => handleChangeInputValue(e)}
            >
              {manufactuersList.map((manufactuer: string) => {
                return (
                  <option key={manufactuer} value={manufactuer}>
                    {manufactuer}
                  </option>
                );
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
        <ContentWrapper>
          <h2>Select equipment</h2>
          <EquipmentContainer>
            <FormElement
              label="Equipment"
              value={equipmentInputValue}
              type="text"
              name="equipment"
              placeholder="Equipment..."
              autocomplete="off"
              onChange={(e: any) => handleEquipmentList(e)}
            />
            <Dropdown
              isOpen={isOpen}
              filteredEquipment={filteredEquipment}
              setSelectedEquipment={setSelectedEquipment}
              selectedEquipment={selectedEquipment}
            />
          </EquipmentContainer>
        </ContentWrapper>
      </Container>
      <Modal
        setIsOpen={setModalInformation}
        isOpen={modalInformation.isOpen}
        message={modalInformation.message}
        type={modalInformation.type}
      />
    </Wrapper>
  );
};

export default NewCar;
