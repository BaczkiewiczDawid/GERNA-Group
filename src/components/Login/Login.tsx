import { LoginContainer, Header } from "components/Login/Login.style";
import Input from "components/Login/Input";
import Button from "components/Employees/Button";

const Login = () => {
  return (
    <LoginContainer>
      <Header>
        Login to <span>GERNA</span>
      </Header>
      <form>
        <Input type="text" placeholder="E-Mail" autoComplete="email" value="" />
        <Input type="password" placeholder="password" autoComplete="current-password" value="" />
        <Button text="Log in" type="submit" secondary />
      </form>
    </LoginContainer>
  );
};

export default Login;
