import React, { useState, useContext, useEffect } from "react";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import EmployeeInformation from "components/Employees/EmployeeInformation";
import Button from "components/Employees/Button";
import Axios from "axios";
import {
  StyledButton,
  Container,
} from "components/Employees/EmployeeDetails.style";
import ConfirmationModal from "components/ConfirmationModal/ConfirmationModal";
import { ConfirmationModalCtx } from "context/ConfirmationModalCtx";
import FormElement from "components/Employees/FormElement";
import { StyledForm } from "components/Employees/NewEmployee.style";
import { Formik } from "formik";
import * as Yup from "yup";
import { Employee, EmployeeDetailsProps } from 'types/types';

const EmployeeDetails = ({ employeeDetails, setEmployeeDetails }: EmployeeDetailsProps) => {
  const { handleShowModal, response } = useContext(ConfirmationModalCtx);

  const [selectedEmployee, setSelectedEmployee] = useState(0);

  const handleUpdateUserDetails = (values: Employee) => {
    Axios.post(
      "https://gernagroup-server.herokuapp.com/update-employee-information",
      {
        data: values,
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteEmployee = (id: number | undefined) => {
    if (typeof id === "number") {
      setSelectedEmployee(id);
      handleShowModal();
    }
  };

  useEffect(() => {
    if (response === 0) {
      Axios.post("https://gernagroup-server.herokuapp.com/delete-employee", {
        id: selectedEmployee,
      });
    }
  }, [response, selectedEmployee]);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const employeeDetailsSchema = Yup.object().shape({
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
    <ContentWrapper secondary={true}>
      <ConfirmationModal />
      <Container>
        <h3>Employee Details</h3>
        <StyledButton onClick={() => handleDeleteEmployee(employeeDetails.id)}>
          Fire employee
        </StyledButton>
      </Container>
      <Formik
        enableReinitialize
        initialValues={employeeDetails}
        validationSchema={employeeDetailsSchema}
        onSubmit={(values) => handleUpdateUserDetails(values)}
      >
        {({ errors, touched }): any => (
          <StyledForm>
            <FormElement
              label="Full name"
              name="name"
              placeholder="Name..."
              errors={errors.name}
              touched={touched.name}
            />
            <FormElement
              label="Age"
              name="age"
              placeholder="Age..."
              errors={errors.age}
              touched={touched.age}
            />
            <FormElement
              label="Address"
              name="address"
              placeholder="Address..."
              errors={errors.address}
              touched={touched.address}
            />
            <FormElement label="City" name="city" placeholder="City..." />
            <FormElement
              label="Phone number"
              name="phone_number"
              placeholder="Phone number..."
              errors={errors.city}
              touched={touched.city}
            />
            <FormElement
              label="Position"
              name="position"
              placeholder="Position..."
              errors={errors.position}
              touched={touched.position}
            />
            <FormElement
              label="Salary"
              name="salary"
              placeholder="Salary..."
              errors={errors.salary}
              touched={touched.salary}
            />
            <Button type="submit" text="Save" />
          </StyledForm>
        )}
      </Formik>
    </ContentWrapper>
  );
};

export default EmployeeDetails;
