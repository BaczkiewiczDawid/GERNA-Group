import { useState } from "react";
import {
  StyledForm,
  StyledButton,
  ErrorMessage,
  Input,
} from "components/Login/Form.style";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length < 5) {
    errors.username = "Must be 5 characters or more";
  } else if (values.username.length > 15) {
    errors.username = "Must be 15 characters or less";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 20) {
    errors.password = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const Form = ({ location, setIsAuthenticated, isAuthenticated }) => {
  let navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // navigate("/", { replace: true });

    const userData = {
      username: formik.values.username,
      email: formik.values.email,
      password: formik.values.password,
    };

    if (location.pathname === "/register") {
      Axios.post("http://localhost:5000/api/register", {
        userData: userData,
      }).then(() => {
        console.log("account created");
      });

      navigate("/login", { replace: true });
    } else {
      Axios.post("http://localhost:5000/api/login", {
        userData: userData,
      }).then((response) => {
        if (response.data[0]) {
          setIsAuthenticated({
            authenticated: true,
            loggedUser: response.data[0].username,
            id: response.data[0].id,
            picture: response.data[0].picture
          });
          
          navigate("/", { replace: true });
        }
      });
    }
  };

  return (
    <StyledForm onSubmit={formik.handleSubmit && handleSubmit}>
      <Input
        type="text"
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder="Enter Your email"
        err={
          formik.errors.email &&
          formik.touched.email &&
          location.pathname === "register"
        }
      />
      {formik.touched.email &&
      formik.errors.email &&
      location.pathname === "/register" ? (
        <ErrorMessage>{formik.errors.email}</ErrorMessage>
      ) : null}
      {location.pathname === "/register" ? (
        <Input
          type="text"
          id="username"
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          placeholder="Enter Your username"
          err={
            formik.touched.username &&
            formik.errors.username &&
            location.pathname === "/register"
          }
        />
      ) : null}
      {formik.touched.username &&
      formik.errors.username &&
      location.pathname === "/register" ? (
        <ErrorMessage>{formik.errors.username}</ErrorMessage>
      ) : null}
      <Input
        type="password"
        id="password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        placeholder="Enter Your password"
        err={
          formik.errors.password &&
          formik.touched.password &&
          location.pathname === "/register"
        }
      />
      {formik.touched.password &&
      formik.errors.password &&
      location.pathname === "/register" ? (
        <ErrorMessage>{formik.errors.password}</ErrorMessage>
      ) : null}

      <StyledButton type="submit">
        {location.pathname === "/register" ? "SIGN UP" : "LOG IN"}
      </StyledButton>
    </StyledForm>
  );
};

export default Form;
