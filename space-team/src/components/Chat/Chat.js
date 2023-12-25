import { useState, useEffect, useRef } from "react";
import Navigation from "components/Navigation/Navigation";
import Logo from "components/Dashboard/Logo";
import { Wrapper, MessageBox } from "components/Chat/Chat.style";
import useAuthenticate from "hooks/useAuthenticate";
import Axios from "axios";
import SingleMessage from "components/Chat/SingleMessage";
import SendMessage from "components/Chat/SendMessage";
import useLocalStorageAuthenticate from "hooks/useLocalStorageAuthenticate";
import Loading from 'components/Dashboard/Loading';

const Chat = () => {
  const isAuthenticated = useLocalStorageAuthenticate();
  const [isLoading, setIsLoading] = useState(true);

  useAuthenticate(isAuthenticated);

  const theme = localStorage.getItem("theme");

  const messagesEndRef = useRef(null);

  const [inputValue, setInputValue] = useState("");
  const [userData, setUserData] = useState([]);
  const [messagesList, setMessagesList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (messagesList.length > 0) {
      scrollToBottom();
    }
  }, [messagesList]);

  useEffect(() => {
    setUserData({
      userID: isAuthenticated.id,
      username: isAuthenticated.loggedUser,
      inputValue: inputValue,
    });
  }, [inputValue]);

  useEffect(() => {
    Axios.get("https://lit-garden-32225.herokuapp.com/api/load-messages").then(
      (response) => {
        setMessagesList(response.data);
        setIsLoading(false);
      }
    );
  }, [inputValue]);

  return (
    <Wrapper>
      <Navigation
        picture={isAuthenticated.picture}
        loggedUser={isAuthenticated.loggedUser}
      />
      <div>
        <Logo theme={theme} />
        <MessageBox>
          {isLoading && <Loading />}
          <SingleMessage
            messagesList={messagesList}
            messagesEndRef={messagesEndRef}
            isAuthenticated={isAuthenticated}
          />
          <SendMessage
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleInputChange={handleInputChange}
            userData={userData}
          />
        </MessageBox>
      </div>
    </Wrapper>
  );
};

export default Chat;
