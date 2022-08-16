import { useState } from "react";
import { LoginContainer, Header } from "components/Login/Login.style";
import Input from "components/Login/Input";
import Button from "components/Employees/Button";

const Login = () => {
  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const handleInputValues = (e: any) => {
    setEnteredValues((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(enteredValues)

  return (
    <LoginContainer>
      <Header>
        Login to <span>GERNA</span>
      </Header>
      <form>
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
