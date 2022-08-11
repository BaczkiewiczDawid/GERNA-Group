import { useRef } from "react";
import { List } from "components/CarsList/Dropdown.style";
import useOutsideClickDetection from "hooks/useOutsideClickDetection";

const Dropdown = ({
  isOpen,
  filteredEquipment,
  setSelectedEquipment,
  selectedEquipment,
  setIsOpen,
}: any) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelectEquipment = (item: string) => {
    const isDuplicated = selectedEquipment.filter(
      (el: string) => el === item
    ).length;

    if (isDuplicated === 0) {
      setSelectedEquipment((prevState: any) => [...prevState, item]);
    } else {
      console.log(`Can't add dupliced equipment`);
    }
  };

  useOutsideClickDetection(dropdownRef, setIsOpen);

  return (
    <>
      {isOpen && (
        <List ref={dropdownRef}>
          {filteredEquipment.map((el: any) => {
            return (
              <p onClick={(item) => handleSelectEquipment(el.name)}>
                {el.name}
              </p>
            );
          })}
        </List>
      )}
    </>
  );
};

export default Dropdown;
