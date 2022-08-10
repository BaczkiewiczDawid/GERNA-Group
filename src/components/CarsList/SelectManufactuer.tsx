import manufactuersList from "data/ManufactuersList";

const SelectManufactuer = ({ setInputValues }: any) => {
  const handleChangeInputValue = (e: any) => {
    setInputValues((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <select name="manufactuer" onChange={(e: any) => handleChangeInputValue(e)}>
      {manufactuersList.map((manufactuer: string) => {
        return (
          <option key={manufactuer} value={manufactuer}>
            {manufactuer}
          </option>
        );
      })}
    </select>
  );
};

export default SelectManufactuer;
