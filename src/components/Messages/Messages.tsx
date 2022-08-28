import { useEffect, useState } from "react";
import Wrapper from "components/Dashboard/Wrapper";
import SingleMessage from "components/Messages/SingleMessage";
import { MessagesList } from "components/Messages/Messages.style";
import Button from "components/Messages/Button";
import Axios from "axios";
import useAuth from "hooks/useAuth";
import { MessageProps } from "types/types";
import useAxios from "hooks/useAxios";
import axios from "axios";
import Error from 'components/Error/Error';

const Messages = () => {
  const isAuthenticated = useAuth();
  const [messages, setMessages] = useState([]);

  const { response, error } = useAxios({
    axiosInstance: axios,
    method: "POST",
    url: "get-messages",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
        "Access-Control-Allow-Origin": "*",
      },
      data: isAuthenticated.authUser,
    },
  });

  useEffect(() => {
    setMessages(response);
  }, [response]);

  return (
    <Wrapper>
      <h1>GERNA Group Messages</h1>
      <MessagesList>
        {!error && messages.map((message: MessageProps) => {
          return (
            <SingleMessage
              key={message.id}
              id={message.id}
              message={message.message}
              title={message.title}
              date={message.date}
              sender={message.sender}
            />
          );
        })}
        {error && <Error />}
        {!error && messages.length === 0 && <p>There's no messages in Your inbox</p>}
      </MessagesList>
      <Button />
    </Wrapper>
  );
};

export default Messages;
