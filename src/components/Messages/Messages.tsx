import Wrapper from "components/Dashboard/Wrapper";
import SingleMessage from "components/Messages/SingleMessage";
import { MessagesList } from 'components/Messages/Messages.style';

const Messages = () => {
  return (
    <Wrapper>
      <h1>Messages</h1>
      <MessagesList>
        <SingleMessage />
        <SingleMessage />
        <SingleMessage />
      </MessagesList>
    </Wrapper>
  );
};

export default Messages;
