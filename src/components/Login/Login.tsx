import {
  LoginContainer,
  Header,
  StyledForm,
} from "components/Login/Login.style";
import Button from "components/Employees/Button";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { EnteredValuesProps } from "types/types";
import { Formik } from "formik";
import FormElement from "components/Employees/FormElement";

const Login = () => {
  const initialState: EnteredValuesProps = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const handleLogin = (values: EnteredValuesProps) => {
    Axios.post("https://gernagroup-server.herokuapp.com/login", {
      userData: values,
    })
      .then((response) => {
        localStorage.setItem("auth", JSON.stringify(response.data));
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
      <Formik
        initialValues={initialState}
        onSubmit={(values: EnteredValuesProps) => {
          handleLogin(values);
        }}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <FormElement
              label="Email"
              name="email"
              placeholder="Email..."
              errors={errors.email}
              touched={touched.email}
            />
            <FormElement
              label="Password"
              name="password"
              placeholder="Password..."
              errors={errors.password}
              touched={touched.password}
              type="password"
            />
            <Button text="Log in" type="submit" />
          </StyledForm>
        )}
      </Formik>
    </LoginContainer>
  );
};

export default Login;
