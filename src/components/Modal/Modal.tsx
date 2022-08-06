import { Wrapper, Timer, Content, Message } from "components/Modal/Modal.style";

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
        handleCloseModal()
    }, 1000)
  }

  return (
    <>
      {isOpen && (
        <Wrapper>
          <Content onClick={handleCloseModal}>
            <Message success={type === 0 ? true : false}>{message}</Message>
            <Timer success={type === 0 ? true : false}></Timer>
          </Content>
        </Wrapper>
      )}
    </>
  );
};

export default Modal;
