import styled, { keyframes } from "styled-components";

type ModalType = {
    success?: boolean;
}

const timerAnimation = keyframes`
    0% {
        width: 100%;
    }

    100% {
        width: 0%;
    }
`;

export const Wrapper = styled.div`
  width: 70vw;
  height: 3rem;
  color: ${({ theme }) => theme.colors.text};
  position: fixed;
  top: 1rem;
  right: 1rem;
`;

export const Content = styled.div`
  position: relative;
  padding: 1rem;
  font-weight: 300;
  background-color: ${({ theme }) => theme.colors.background};
  -webkit-box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  cursor: pointer;
`;

export const Message = styled.p<ModalType>`
  font-size: 0.75rem;
  color: ${props => props.success ? props.theme.colors.green : props.theme.colors.text};
  margin-left: 1rem;
`;

export const Timer = styled.div`
  width: 100%;
  height: 0.3rem;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.green};
  bottom: 0;
  left: 0;
  animation: ${timerAnimation} 1s linear;
`;
