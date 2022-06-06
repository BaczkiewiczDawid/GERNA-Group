import styled from "styled-components";

export const ModalWrapper = styled.div`
  display: ${(props) => (props.isModalOpen ? "flex" : "none")};
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(42, 42, 42, 0.75);
  position: fixed;
  top: 0;
  left: 0;
`;

export const ModalContent = styled.div`
  width: 90vw;
  height: 20rem;
  background-color: rgba(250, 250, 250);
  margin: 0;
  margin-top: 5rem;
  margin-right: 1rem;
  border-radius: 1.3rem;
  padding: 1.2rem 2rem;

  h1 {
    color: ${({ theme }) => theme.colors.black};
  }

  p {
    color: ${({ theme }) => theme.colors.black};
    margin-top: 2rem;
  }

  img {
    background-color: ${({ theme }) => theme.colors.purple};
    padding: 0.7rem;
    border-radius: 100px;
  }

  @media screen and (min-width: 768px) {
    width: 50vw;
  }

  @media screen and (min-width: 1080px) {
    width: 45vw;
  }

  @media screen and (min-width: 1440px) {
    width: 35vw;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 4rem;

  img {
    margin-left: 3rem;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    margin-top: 5.5rem;
  }
`;
