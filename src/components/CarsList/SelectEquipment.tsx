import { useState } from "react";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import Dropdown from "components/CarsList/Dropdown";
import FormElement from "components/CarsList/FormElement";
import EquipmentList from "data/EquipmentList";
import { EquipmentContainer } from "components/CarsList/SelectEquipment.style";

interface PropsTypes {
    selectedEquipment: string[],
    setSelectedEquipment: any,
}

const SelectEquipment = ({ selectedEquipment, setSelectedEquipment }: PropsTypes) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [equipmentInputValue, setEquipmentInputValue] = useState<string>("");
  const [filteredEquipment, setFilteredEquipment] = useState([]);

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

  return (
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
          setIsOpen={setIsOpen}
        />
      </EquipmentContainer>
    </ContentWrapper>
  );
};

export default SelectEquipment;
