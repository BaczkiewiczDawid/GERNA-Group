import { createContext, useState } from "react";

export const ConfirmationModalCtx: any = createContext({});

enum Response {
  yes = 0,
  no = 1,
}

const ConfirmationModalProvider = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [response, setResponse] = useState(1);

  const handleShowModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleSetResponse = (value: Response) => {
    setResponse(value);
    handleCloseModal();
  };

  return (
    <ConfirmationModalCtx.Provider
      value={{
        isOpen,
        setIsOpen,
        response,
        setResponse,
        handleCloseModal,
        handleSetResponse,
        handleShowModal,
      }}
    >
      {children}
    </ConfirmationModalCtx.Provider>
  );
};

export default ConfirmationModalProvider;
