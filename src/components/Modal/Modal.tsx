import { Wrapper, Timer, Content, Message, Container } from "components/Modal/Modal.style";
import SuccessIcon from "assets/images/success.svg";
import ErrorIcon from "assets/images/error.svg";

type ModalType = {
  isOpen: boolean;
  message: string;
  type: any;
  setIsOpen: any;
};

const Modal = ({ isOpen, message, type, setIsOpen }: ModalType) => {
  const handleCloseModal = () => {
    setIsOpen({
      isOpen: false,
      message: message,
      type: type,
    });
  };

  if (isOpen) {
    setTimeout(() => {
      handleCloseModal();
    }, 1000);
  }

  return (
    <>
      {isOpen && (
        <Wrapper>
          <Content onClick={handleCloseModal}>
            <Container>
              <img src={type === 0 ? SuccessIcon : ErrorIcon} alt={type === 0 ? 'success' : 'error'} />
              <Message success={type === 0 ? true : false}>{message}</Message>
            </Container>
            <Timer success={type === 0 ? true : false}></Timer>
          </Content>
        </Wrapper>
      )}
    </>
  );
};

export default Modal;
