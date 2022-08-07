import styled from "styled-components";
import { isPropertySignature } from "typescript";

type ButtonType = {
    primary?: boolean;
}

export const Modal = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 1rem;
  left: 0;
  margin-left: 50%;
  transform: translateX(-50%);
  width: 90vw;
  height: 9rem;
  background-color: ${({ theme }) => theme.colors.background};
  -webkit-box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  z-index: 10;
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem;

  h4 {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 768px) {
    width: 50vw;
  }

  @media screen and (min-width: 1080px) {
    width: 40vw;
    height: 11rem;
    top: 3rem;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 1rem;
`;

export const Button = styled.button<ButtonType>`
  background-color: transparent;
  border: 1px solid ${props => props.primary ? props.theme.colors.green : props.theme.colors.red};
  color: ${props => props.primary ? props.theme.colors.green : props.theme.colors.red};
  padding: 0.5rem 1.6rem;
  cursor: pointer;
  margin: 0 1rem;

  &:hover {
    background-color: ${props => props.primary ? props.theme.colors.green : props.theme.colors.red};
    color: ${({ theme }) => theme.colors.background};
    transition: .25s;
  }
`;
