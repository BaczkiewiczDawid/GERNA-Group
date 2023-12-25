import styled, { keyframes } from 'styled-components';

const loading = keyframes`
    from {
        width: 100%;
    }

    to {
        width: 0%;
    }
`;

export const Modal = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: ${({ theme }) => theme.background};
  box-shadow: 8px 8px 26px -16px rgba(42, 42, 42, 1);
  border: 1px solid rgba(250, 250, 250, 0.5);
  max-width: 20rem;
  height: 3rem;
  cursor: pointer;
  z-index: 10;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;

  p {
    font-size: 0.9rem;
    font-weight: 300;
    margin-left: 1rem;
    color: ${({ theme }) => theme.text};
    margin-right: 2rem;
  }
`;

export const Timer = styled.div`
    height: .3rem;
    background-color: ${props => props.success ? props.theme.green : props.theme.error};
    animation: ${loading} 2.5s linear;
`;