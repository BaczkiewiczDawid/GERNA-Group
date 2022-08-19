import { useState } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import { Form } from "components/Messages/NewMessage.style";
import Input from "components/Employees/Input";
import Button from "components/Employees/Button";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  title: "",
  description: "",
};

interface MessagesProps {
  email: string;
  title: string;
  description: string;
}

const NewMessage = () => {
  const [messageValues, setMessageValues] = useState<MessagesProps>(initialState);
  const navigate = useNavigate();

  const handleSendMessage = (e: any) => {
    e.preventDefault();
  };

  const handleInputValues = (e: any) => {
    setMessageValues((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  console.log(messageValues);

  return (
    <Wrapper>
      <h1>New message</h1>
      <ContentWrapper>
        <Form onSubmit={(e) => handleSendMessage(e)}>
          <label htmlFor="">Email</label>
          <Input
            name="email"
            onChange={handleInputValues}
            type="text"
            value={messageValues.email}
            placeholder="E-Mail..."
          />
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
    </Wrapper>
  );
};

export default NewMessage;
