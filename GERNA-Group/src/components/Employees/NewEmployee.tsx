import { useEffect, useState } from "react";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import Wrapper from "components/Dashboard/Wrapper";
import SelectDepartment from "components/Employees/SelectDepartment";
import { StyledForm, Title } from "components/Employees/NewEmployee.style";
import Button from "components/Employees/Button";
import axios from "axios";
import Modal from "components/Modal/Modal";
import useModal from "hooks/useModal";
import useAuth from "hooks/useAuth";
import emailjs from "emailjs-com";
import FormElement from "components/Employees/FormElement";
import { Formik } from "formik";
import { Employee } from "types/types";
import * as Yup from "yup";
import useAxios from "hooks/useAxios";

const initialEmployeeInformations: Employee = {
  name: "",
  age: undefined,
  position: "",
  address: "",
  city: "",
  phone_number: undefined,
  email: "",
  salary: undefined,
  department: "katowice",
};

const NewEmployee = () => {
  const [employeeInformation, setEmployeeInformation] = useState<Employee>();

  const isAuthenticated = useAuth();

  const { showModal, modalInformation, setModalInformation, ResultType } =
    useModal();

  const sendEmail = (values: Employee, password: string) => {
    const data = {
      email: values.email,
      name: values.name,
      password: password,
    };

    emailjs
      .send("service_aev4svh", "template_vzmo5os", data, "TFiGvZVNaPgrAPQie")
      .then((result) => {
        setEmployeeInformation(initialEmployeeInformations);
      });
  };

  const { response, error, refetch }: any = useAxios({
    axiosInstance: axios,
    method: "POST",
    url: "new-employee",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        "Access-Control-Allow-Origin": "*",
      },
      data: employeeInformation,
    },
  });

  useEffect(() => {
    if (employeeInformation !== undefined) {
      if (response.length > 0) {
        showModal(ResultType.success, "Employee added successfully!");
        sendEmail(employeeInformation, response);
      } else {
        showModal(ResultType.error, "Something went wrong");
      }
    }
  }, [response, employeeInformation]);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const NewEmployeeSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    age: Yup.number()
      .min(18, "Must be 18 years old")
      .max(100, "Too old!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    position: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    city: Yup.string()
      .min(2, "Too short")
      .max(50, "Too long!")
      .required("Required"),
    phone_number: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required"),
    salary: Yup.number()
      .min(1000, "Employee can't earn less than $1000")
      .max(100000, "Employee can't earn more than $100000!")
      .required("Required"),
  });

  return (
    <Wrapper>
      <h1>Add new employee</h1>
      <ContentWrapper>
        <Title>Select department</Title>
        <SelectDepartment setEmployeeInformation={setEmployeeInformation} />
        <Formik
          initialValues={initialEmployeeInformations}
          validationSchema={NewEmployeeSchema}
          onSubmit={(values: Employee, { resetForm }) => {
            setEmployeeInformation(values);
            resetForm();
            refetch();
          }}
        >
          {({ errors, touched }) => (
            <StyledForm>
              <FormElement
                label="Name"
                placeholder="Name..."
                name="name"
                errors={errors.name}
                touched={touched.name}
              />
              <FormElement
                label="Age"
                placeholder="Age..."
                name="age"
                errors={errors.age}
                touched={touched.age}
              />
              <FormElement
                label="Position"
                placeholder="Position..."
                name="position"
                errors={errors.position}
                touched={touched.position}
              />
              <FormElement
                label="Address"
                placeholder="Address..."
                name="address"
                errors={errors.address}
                touched={touched.address}
              />
              <FormElement
                label="City"
                placeholder="City..."
                name="city"
                errors={errors.city}
                touched={touched.city}
              />
              <FormElement
                label="Phone number"
                placeholder="Phone number..."
                name="phone_number"
                type="number"
                errors={errors.phone_number}
                touched={touched.phone_number}
              />
              <FormElement
                label="Email"
                placeholder="Email..."
                name="email"
                errors={errors.email}
                touched={touched.email}
              />
              <FormElement
                label="Salary"
                placeholder="Salary..."
                name="salary"
                errors={errors.salary}
                touched={touched.salary}
              />
              <Button type="submit" text="Add new employee" />
            </StyledForm>
          )}
        </Formik>
      </ContentWrapper>
      <Modal
        setIsOpen={setModalInformation}
        isOpen={modalInformation.isOpen}
        message={modalInformation.message}
        type={modalInformation.type}
      />
    </Wrapper>
  );
};

export default NewEmployee;
