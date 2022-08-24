import { useContext } from "react";
import {
  Modal,
  Button,
  ButtonsContainer,
} from "components/ConfirmationModal/ConfirmationModal.style";
import { ConfirmationModalCtx } from "context/ConfirmationModalCtx";
import { Response } from 'types/types'

const ConfirmationModal = () => {
  const { isOpen, handleSetResponse } = useContext(ConfirmationModalCtx);

  return (
    <>
      {isOpen && (
        <Modal>
          <h4>Are you sure?</h4>
          <p>This process is not irreversible</p>
          <ButtonsContainer>
            <Button primary onClick={() => handleSetResponse(Response.yes)}>
              Yes
            </Button>
            <Button onClick={() => handleSetResponse(Response.no)}>No</Button>
          </ButtonsContainer>
        </Modal>
      )}
    </>
  );
};

export default ConfirmationModal;
