import { useEffect, useState } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import SingleMessage from "components/Messages/SingleMessage";
import { MessagesList } from "components/Messages/Messages.style";
import Button from "components/Messages/Button";
import Axios from "axios";
import useAuth from "hooks/useAuth";
import { MessageProps } from 'types/types';

const Messages = () => {
  const isAuthenticated = useAuth();
  const [messages, setMessages] = useState([]);

  const getMessages = () => {
    Axios.post("https://gernagroup-server.herokuapp.com/get-messages", {
      user: isAuthenticated.authUser,
    }).then((response) => {
      setMessages(response.data);
    });
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <Wrapper>
      <h1>GERNA Group Messages</h1>
      <MessagesList>
        {messages.map((message: MessageProps) => {
          return (
            <SingleMessage
              message={message.message}
              title={message.title}
              date={message.date}
              sender={message.sender}
            />
          );
        })}
        {messages.length === 0 && <p>There's no messages in Your inbox</p>}
      </MessagesList>
      <Button />
    </Wrapper>
  );
};

export default Messages;
