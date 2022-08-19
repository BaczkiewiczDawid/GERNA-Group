import Wrapper from "components/Dashboard/Wrapper";
import SingleMessage from "components/Messages/SingleMessage";
import { MessagesList } from 'components/Messages/Messages.style';
import Button from 'components/Messages/Button';

const Messages = () => {
  return (
    <Wrapper>
      <h1>Messages</h1>
      <MessagesList>
        <SingleMessage />
        <SingleMessage />
        <SingleMessage />
      </MessagesList>
      <Button />
    </Wrapper>
  );
};

export default Messages;
