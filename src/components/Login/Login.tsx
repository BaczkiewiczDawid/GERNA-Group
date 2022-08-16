import { useState } from "react";
import { LoginContainer, Header } from "components/Login/Login.style";
import Input from "components/Login/Input";
import Button from "components/Employees/Button";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from 'hooks/useAuth';

const Login = () => {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputValues = (e: any) => {
    setEnteredValues((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e: any) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/login", {
      userData: enteredValues,
    })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem('auth', JSON.stringify(response.data));
        navigate("/", { replace: true });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <LoginContainer>
      <Header>
        Login to <span>GERNA</span>
      </Header>
      <form onSubmit={handleLogin}>
        <Input
          type="text"
          placeholder="E-Mail"
          autoComplete="email"
          name="email"
          value={enteredValues.email}
          onChange={(e: any) => handleInputValues(e)}
        />
        <Input
          type="password"
          placeholder="password"
          autoComplete="current-password"
          name="password"
          value={enteredValues.password}
          onChange={(e: any) => handleInputValues(e)}
        />
        <Button text="Log in" type="submit" secondary />
      </form>
    </LoginContainer>
  );
};

export default Login;
