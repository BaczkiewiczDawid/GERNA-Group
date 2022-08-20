import { useEffect, useState } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import {
  Form,
  Container,
  EmployeeList,
  Email,
  EmailsList,
  List,
} from "components/Messages/NewMessage.style";
import Input from "components/Employees/Input";
import Button from "components/Employees/Button";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import { MessagesList } from "./Messages.style";

const initialState = {
  title: "",
  description: "",
};

interface MessagesProps {
  title: string;
  description: string;
}

const NewMessage = () => {
  const [messageValues, setMessageValues] =
    useState<MessagesProps>(initialState);
  const [employeesList, setEmployeesList] = useState<string[]>([]);
  const [emailsList, setEmailsList] = useState<string[]>([]);

  const navigate = useNavigate();

  const handleSendMessage = (e: any) => {
    e.preventDefault();

    const data = {
      title: messageValues.title,
      description: messageValues.description,
      emailsList: emailsList
    }

    Axios.post('http://localhost:3001/send-message', {
      data: data
    }).then((response) => {
      console.log(response)
    })
  };

  const getEmployeeList = () => {
    Axios.get("http://localhost:3001/employees").then((response) => {
      setEmployeesList(response.data);
    });
  };

  const handleInputValues = (e: any) => {
    setMessageValues((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    getEmployeeList();
  }, []);

  const handleAddNewAddress = (e: any) => {
    const selectedEmployee: any = employeesList.find(
      (el: any) => el.name === e.target.textContent
    );
    const selectedEmployeeEmail: string = selectedEmployee.email;

    setEmailsList((prevState: string[]) => [...prevState, selectedEmployeeEmail]);
  };

  const handleDeleteAddress = (e: any) => {
    console.log(e.target.textContent)
    const filteredEmailsList = emailsList.filter((email: string) => email !== e.target.textContent);
    setEmailsList(filteredEmailsList);
  }

  console.log(messageValues);

  return (
    <Wrapper>
      <h1>New message</h1>
      <Container>
        <ContentWrapper>
          <Form onSubmit={(e) => handleSendMessage(e)}>
            <label>Emails</label>
            <EmailsList>
              {emailsList.map((email: string) => (
                <Email onClick={handleDeleteAddress}>{email}</Email>
              ))}
            </EmailsList>
            <label htmlFor="">Title</label>
            <Input
              name="title"
              onChange={handleInputValues}
              type="text"
              value={messageValues.title}
              placeholder="Title..."
            />
            <label>Description</label>
            <textarea
              name="description"
              onChange={handleInputValues}
              maxLength={250}
              placeholder="Input Your message here..."
              value={messageValues.description}
            ></textarea>
            <Button type="submit" text="Send" />
          </Form>
        </ContentWrapper>
        <EmployeeList>
          <List>
            {employeesList.map((employee: any) => {
              return <li onClick={handleAddNewAddress}>{employee.name}</li>;
            })}
          </List>
        </EmployeeList>
      </Container>
    </Wrapper>
  );
};

export default NewMessage;
