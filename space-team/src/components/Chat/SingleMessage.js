import { SingleMessageWrapper, MessageContainer } from "components/Chat/SingleMessage.style";
import Profile from 'components/Dashboard/Profile'

const SingleMessage = ({ messagesList, messagesEndRef, isAuthenticated }) => {
  return (
    <>
      {messagesList.map((message) => (
        <SingleMessageWrapper
          ref={messagesEndRef}
          activeUser={isAuthenticated.id === message.userid}
          key={message.id}
        >
          <Profile picture={message.picture} dashboard={true} />
          <MessageContainer>
            <p>{message.message}</p>
          </MessageContainer>
        </SingleMessageWrapper>
      ))}
    </>
  );
};

export default SingleMessage;
