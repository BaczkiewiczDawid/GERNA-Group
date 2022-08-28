import { useState, useEffect } from "react";
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
import useAxios from "hooks/useAxios";
import Error from "components/Error/Error";
import axios from "axios";

const Login = () => {
  const initialState: EnteredValuesProps = {
    email: "",
    password: "",
  };
  const [values, setValues] = useState<EnteredValuesProps>();

  const navigate = useNavigate();

  const { response, error, refetch }: any = useAxios({
    axiosInstance: axios,
    method: "POST",
    url: "login",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        "Access-Control-Allow-Origin": "*",
      },
      data: values,
    },
  });

  useEffect(() => {
    if (values !== undefined) {
      if (response.authenticated === true) {
        localStorage.setItem("auth", JSON.stringify(response));
        navigate("/", { replace: true });
      }
    }
  }, [response, values, navigate]);

  return (
    <LoginContainer>
      <Header>
        Login to <span>GERNA</span>
      </Header>
      <Formik
        initialValues={initialState}
        onSubmit={(values: EnteredValuesProps) => {
          setValues(values);
          refetch();
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
