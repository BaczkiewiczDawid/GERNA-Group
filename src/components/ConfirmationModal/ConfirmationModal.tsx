import { useState } from "react";
import {
  Modal,
  Button,
  ButtonsContainer,
} from "components/ConfirmationModal/ConfirmationModal.style";

enum Response {
  yes = 0,
  no = 1,
}

const ConfirmationModal = ({ isOpen, setIsOpen }: any) => {
  const [response, setResponse] = useState<Response>(1);

  const handleCloseModal = (value: Response) => {
    setIsOpen(false);
    setResponse(value);

    return response;
  };

  console.log(response)

  return (
    <>
      {isOpen && (
        <Modal>
          <h4>Are you sure?</h4>
          <p>This process is not irreversible</p>
          <ButtonsContainer>
            <Button primary onClick={() => handleCloseModal(0)}>
              Yes
            </Button>
            <Button onClick={() => handleCloseModal(1)}>No</Button>
          </ButtonsContainer>
        </Modal>
      )}
    </>
  );
};

export default ConfirmationModal;
