import { useEffect, useState } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import {
  StyledForm,
  Container,
  EmployeeList,
  Email,
  EmailsList,
  List,
} from "components/Messages/NewMessage.style";
import Button from "components/Employees/Button";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import useAuth from "hooks/useAuth";
import useModal from "hooks/useModal";
import Modal from "components/Modal/Modal";
import { Message } from "types/types";
import { Formik } from "formik";
import FormElement from "components/Employees/FormElement";
import * as Yup from "yup";

const initialState: Message = {
  title: "",
  description: "",
};

const NewMessage = () => {
  const [employeesList, setEmployeesList] = useState<string[]>([]);
  const [emailsList, setEmailsList] = useState<string[]>([]);

  const isAuthenticated = useAuth();

  const { showModal, modalInformation, setModalInformation, ResultType } =
    useModal();

  const getCurrentDate = () => {
    let today: Date = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();

    const currentDate: string = dd + "." + mm + "." + yyyy;

    return currentDate;
  };

  const handleSendMessage = (values: Message) => {
    const currentDate: string = getCurrentDate();
    console.log(values);

    const data = {
      title: values.title,
      description: values.description,
      emailsList: emailsList,
      sender: isAuthenticated.authUser,
      date: currentDate,
    };

    Axios.post("https://gernagroup-server.herokuapp.com/send-message", {
      data: data,
    })
      .then((response) => {
        console.log(response);
        setEmailsList([]);
        showModal(ResultType.success, "Message sent successfully");
      })
      .catch((err) => {
        showModal(ResultType.error, "Something went wrong");
      });
  };

  const getEmployeeList = () => {
    Axios.get("https://gernagroup-server.herokuapp.com/employees").then(
      (response) => {
        setEmployeesList(response.data);
      }
    );
  };

  useEffect(() => {
    getEmployeeList();
  }, []);

  const handleAddNewAddress = (e: any) => {
    const selectedEmployee: any = employeesList.find(
      (el: any) => el.name === e.target.textContent
    );
    const selectedEmployeeEmail: string = selectedEmployee.email;

    setEmailsList((prevState: string[]) => [
      ...prevState,
      selectedEmployeeEmail,
    ]);
  };

  const handleDeleteAddress = (e: any) => {
    console.log(e.target.textContent);
    const filteredEmailsList = emailsList.filter(
      (email: string) => email !== e.target.textContent
    );
    setEmailsList(filteredEmailsList);
  };

  const MessageSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Required"),
    description: Yup.string()
      .min(2, "Too short!")
      .max(300, "Too long!")
      .required("Required"),
  });

  return (
    <Wrapper>
      <h1>New message</h1>
      <Container>
        <ContentWrapper>
          <label>Emails</label>
          <EmailsList>
            {emailsList.map((email: string) => (
              <Email onClick={handleDeleteAddress}>{email}</Email>
            ))}
          </EmailsList>
          <Formik
            initialValues={initialState}
            validationSchema={MessageSchema}
            onSubmit={(values: Message, { resetForm }) => {
              handleSendMessage(values);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <StyledForm>
                <FormElement
                  label="Title"
                  name="title"
                  placeholder="Title..."
                  errors={errors.title}
                  touched={touched.title}
                />
                <FormElement
                  label="Description"
                  name="description"
                  placeholder="Description..."
                  component="textarea"
                  errors={errors.description}
                  touched={touched.description}
                />
                <Button type="submit" text="Send" />
              </StyledForm>
            )}
          </Formik>
        </ContentWrapper>
        <EmployeeList>
          <h3>Employees list</h3>
          <List>
            {employeesList.map((employee: any) => {
              return (
                <li key={Math.random() * 100} onClick={handleAddNewAddress}>
                  {employee.name}
                </li>
              );
            })}
          </List>
        </EmployeeList>
      </Container>
      <Modal
        setIsOpen={setModalInformation}
        isOpen={modalInformation.isOpen}
        message={modalInformation.message}
        type={modalInformation.type}
      />
    </Wrapper>
  );
};

export default NewMessage;
