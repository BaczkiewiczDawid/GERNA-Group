import { useState } from "react";

enum ResultType {
  success = 0,
  error = 1,
}

const useModal = () => {
  const [modalInformation, setModalInformation] = useState({
    isOpen: false,
    type: ResultType.error,
    message: "",
  });

  const showModal = (type: ResultType, message: string) => {
    setModalInformation({
      isOpen: true,
      type: type,
      message: message,
    });
  };

  return {
    showModal: showModal,
    modalInformation: modalInformation,
    setModalInformation: setModalInformation,
    ResultType: ResultType
  }
};

export default useModal;
