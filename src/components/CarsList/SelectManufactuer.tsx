import manufactuersList from "data/ManufactuersList";
import Select from 'components/Select/Select';

const SelectManufactuer = ({ setInputValues }: any) => {
  const handleChangeInputValue = (e: any) => {
    setInputValues((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Select name="manufactuer" onChange={(e: any) => handleChangeInputValue(e)}>
      {manufactuersList.map((manufactuer: string) => {
        return (
          <option key={manufactuer} value={manufactuer}>
            {manufactuer}
          </option>
        );
      })}
    </Select>
  );
};

export default SelectManufactuer;
