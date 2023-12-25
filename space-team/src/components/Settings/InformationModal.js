import { Background, Container } from 'components/Settings/InformationModal.style';

const InformationModal = ({ handleModalState, title, info, value }) => {
  return (
    <Background>
      <Container>
        <h1>{title}</h1>
        <p>{info}</p>
        <button onClick={handleModalState}>{value}</button>
      </Container>
    </Background>
  );
};

export default InformationModal;
