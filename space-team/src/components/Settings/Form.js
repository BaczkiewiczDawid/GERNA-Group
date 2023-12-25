import { useState } from "react";
import Input from "components/Settings/Input";
import { InputWrapper, SelectWrapper } from "components/Settings/Form.style";
import Button from "components/Settings/Button";
import Axios from "axios";
import InformationModal from "components/Settings/InformationModal";
import { useEffect } from "react";

const Form = ({ loggedUserData, setLoggedUserData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [countryList, setCountryList] = useState([]);

  const handleInputValue = (e) => {
    setLoggedUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSaveData = (e) => {
    e.preventDefault();
    Axios.post("https://space-team-server-5628bd799a00.herokuapp.com/set-data", {
      userData: loggedUserData,
    });

    handleModalState();
  };

  const handleModalState = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => setCountryList(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {isOpen ? (
        <InformationModal
          title="Success!"
          info="Your account details has been updated"
          value="Ok"
          handleModalState={handleModalState}
        />
      ) : null}
      <form onSubmit={handleSaveData}>
        <InputWrapper>
          <Input
            label="Full name"
            userValue={loggedUserData.username}
            disabled={true}
          />
          <Input
            label="Job"
            name="job"
            userValue={loggedUserData.job}
            onChange={handleInputValue}
          />
        </InputWrapper>
        <h4>Contact Informations</h4>
        <InputWrapper>
          <Input
            label="Phone Number"
            name="phone"
            userValue={loggedUserData.phone}
            onChange={handleInputValue}
          />
          <Input
            label="Email address"
            name="email"
            userValue={loggedUserData.email}
            disabled={true}
            onChange={handleInputValue}
          />
        </InputWrapper>
        <InputWrapper>
          <SelectWrapper>
            <label htmlFor="">Country</label>
            <select
              name="country"
              value={loggedUserData.country}
              onChange={handleInputValue}
            >
              {countryList.map((country) => (
                <option
                  name="country"
                  key={country.name.common}
                  value={country.name.common}
                >
                  {country.name.common}
                </option>
              ))}
            </select>
          </SelectWrapper>
          <Input
            label="City"
            name="city"
            userValue={loggedUserData.city}
            onChange={handleInputValue}
          />
        </InputWrapper>

        <Button type="submit" secondary={true} value="Save" />
      </form>
    </>
  );
};

export default Form;
