import { useState } from "react";
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

  return (
    <>
      {isOpen && (
        <Wrapper>
          <Content onClick={handleCloseModal}>
            <Message success={type === 0 ? true : false}>{message}</Message>
            <Timer></Timer>
          </Content>
        </Wrapper>
      )}
    </>
  );
};

export default Modal;
