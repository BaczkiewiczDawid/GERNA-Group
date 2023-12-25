import successIcon from 'assets/images/success.svg';
import errorIcon from 'assets/images/error.svg';
import { Modal, Content, Timer } from 'components/InformationModal/InformationModal.style';

const InformationModal = ({ isOpen, icon, message, onClick, success }) => {
  return (
    <Modal isOpen={isOpen} onClick={onClick}>
      <Content success={success}>
        <img src={success === true ? successIcon : errorIcon} alt={icon} />
        <p>{message}</p>
      </Content>
      <Timer success={success} />
    </Modal>
  );
};

export default InformationModal;
