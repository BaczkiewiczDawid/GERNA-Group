import { useState, useEffect } from "react";
import Navigation from "components/Navigation/Navigation";
import Logo from "components/Dashboard/Logo";
import Axios from "axios";
import {
  Wrapper,
  Title,
  Container,
  SettingsContent,
  InputWrapper,
} from "components/Settings/Settings.style";
import Input from "components/Settings/Input";
import Profile from 'components/Settings/Profile';
import Button from 'components/Settings/Button';
import useAuthenticate from 'hooks/useAuthenticate';

const Settings = () => {
  const data = localStorage.getItem('isAuthenticated');
  const isAuthenticated = JSON.parse(data);

  useAuthenticate(isAuthenticated);

  const [loggedUserData, setLoggedUserData] = useState("");
  const userData = isAuthenticated.id;

  useEffect(() => {
    Axios.post("http://localhost:5000/api/get-user", {
      userData: userData,
    }).then((response) => {
      setLoggedUserData(response.data[0]);
    });
  }, [userData]);

  return (
    <Wrapper>
      <Navigation
        picture={isAuthenticated.picture}
        loggedUser={isAuthenticated.loggedUser}
      />
      <Container>
        <Logo />
        <Title>Settings</Title>
        <SettingsContent>
          <h3>Avatar</h3>
          <Profile loggedUserData={loggedUserData} />
          <InputWrapper>
            <Input label="Full name" userValue={loggedUserData.username} />
            <Input label="Job" userValue={loggedUserData.job} />
          </InputWrapper>
          <h4>Contact Informations</h4>
          <InputWrapper>
            <Input label="Phone Number" userValue={loggedUserData.phone} />
            <Input label="Email address" userValue={loggedUserData.email} />
          </InputWrapper>
          <InputWrapper>
            <Input label="Country" userValue={loggedUserData.country} />
            <Input label="City" userValue={loggedUserData.city} />
          </InputWrapper>
          <Button secondary="secondary" value="Save" />
        </SettingsContent>
      </Container>
    </Wrapper>
  );
};

export default Settings;
