import manufactuersList from "data/ManufactuersList";
import { StyledSelect } from 'components/CarsList/SelectManufactuer.style';

const SelectManufactuer = ({ setInputValues }: any) => {
  const handleChangeInputValue = (e: any) => {
    setInputValues((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <StyledSelect name="manufactuer" onChange={(e: any) => handleChangeInputValue(e)}>
      {manufactuersList.map((manufactuer: string) => {
        return (
          <option key={manufactuer} value={manufactuer}>
            {manufactuer}
          </option>
        );
      })}
    </StyledSelect>
  );
};

export default SelectManufactuer;
