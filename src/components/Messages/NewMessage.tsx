import Wrapper from "components/Dashboard/Wrapper";
import ContentWrapper from "components/Dashboard/ContentWrapper";
import { Form } from "components/Messages/NewMessage.style";
import Input from "components/Employees/Input";
import Button from "components/Employees/Button";

const NewMessage = () => {
  const handleSendMessage = () => {};

  return (
    <Wrapper>
      <h1>New message</h1>
      <ContentWrapper>
        <Form onSubmit={handleSendMessage}>
          <label htmlFor="">Email</label>
          <Input type="text" value="" placeholder="E-Mail..." />
          <label htmlFor="">Title</label>
          <Input type="text" value="" placeholder="Title..." />
          <label>Description</label>
          <textarea
            maxLength={250}
            placeholder="Input Your message here..."
          ></textarea>
          <Button type="submit" text="Send" />
        </Form>
      </ContentWrapper>
    </Wrapper>
  );
};

export default NewMessage;
