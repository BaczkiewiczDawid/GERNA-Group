import { InputWrapper, StyledInput } from "components/Chat/SendMessage.style";
import arrowIcon from "assets/images/arrow-icon.svg";
import Axios from "axios";

const SendMessage = ({ inputValue, setInputValue, userData }) => {
  const handleSendMessage = () => {
    if (inputValue !== "") {
      Axios.post("https://lit-garden-32225.herokuapp.com/api/new-message", {
        userData: userData,
      });
    }

    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <InputWrapper>
      <StyledInput
        placeholder="Type Your message here..."
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={(e) => e.code === 'Enter' ? handleSendMessage() : null}
      />
      <img src={arrowIcon} alt="send message" onClick={handleSendMessage} />
    </InputWrapper>
  );
};

export default SendMessage;
