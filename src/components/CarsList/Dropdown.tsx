import { List } from "components/CarsList/Dropdown.style";

const Dropdown = ({
  isOpen,
  filteredEquipment,
  setSelectedEquipment,
  selectedEquipment,
}: any) => {
  const handleSelectEquipment = (item: any) => {
    const isDuplicated = selectedEquipment.filter(
      (el: any) => el === item
    ).length;

    if (isDuplicated === 0) {
      setSelectedEquipment((prevState: any) => [...prevState, item]);
    } else {
      console.log(`Can't add dupliced equipment`);
    }
  };

  return (
    <>
      {isOpen && (
        <List>
          {filteredEquipment.map((el: any) => {
            return (
              <p onClick={(item: any) => handleSelectEquipment(el.name)}>
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
