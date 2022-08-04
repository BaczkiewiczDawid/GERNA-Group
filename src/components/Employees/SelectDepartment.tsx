import { useNavigate, useLocation } from "react-router-dom";

const SelectDepartment = ({ setEmployeeInformation }: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleChangeURL = (e: any) => {
    if (location.pathname === "/employees/new") {
      setEmployeeInformation((prevState: any) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));

      return;
    }

    navigate(`/employees/${e.target.value}`, { replace: true });
  };

  return (
    <select name="deparment" onChange={(e: any) => handleChangeURL(e)}>
      <option value="katowice">Katowice</option>
      <option value="wroclaw">Wrocław</option>
      <option value="olsztyn">Olsztyn</option>
      <option value="krakow">Kraków</option>
      <option value="warszawa">Warszawa</option>
      <option value="gdansk">Gdańsk</option>
    </select>
  );
};

export default SelectDepartment;
