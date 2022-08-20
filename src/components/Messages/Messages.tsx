import { useEffect, useState } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import SingleMessage from "components/Messages/SingleMessage";
import { MessagesList } from 'components/Messages/Messages.style';
import Button from 'components/Messages/Button';
import Axios from 'axios';
import useAuth from "hooks/useAuth";

const Messages = () => {
  const isAuthenticated = useAuth();
  const [messages, setMessages] = useState([])

  const getMessages = () => {
    Axios.post('http://localhost:3001/get-messages', {
      user: isAuthenticated.authUser
    }).then((response) => {
      setMessages(response.data)
    })
  }

  useEffect(() => {
    getMessages()
  }, [])

  return (
    <Wrapper>
      <h1>Messages</h1>
      <MessagesList>
        {messages.map((message: any) => {
          return (
            <SingleMessage message={message.message} title={message.title} />
          )
        })}
      </MessagesList>
      <Button />
    </Wrapper>
  );
};

export default Messages;