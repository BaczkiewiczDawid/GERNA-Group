import styled from "styled-components";

export const SingleMessageWrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: ${(props) => (props.activeUser ? "row-reverse" : "row")};
  margin-left: ${(props) => (props.activeUser ? "10rem" : "0")};

  div:nth-child(n + 2) {
    background-color: ${(props) =>
      props.activeUser ? props.theme.purple : "lightgrey"};
    color: ${(props) =>
      props.activeUser ? props.theme.white : props.theme.black};
    margin-left: ${(props) => (props.activeUser ? "0" : "2rem")};
    margin-right: ${(props) => (props.activeUser ? "2rem" : "0")};
  }
`;

export const MessageContainer = styled.div`
  width: auto;
  min-width: 55%;
  max-width: 70%;
  background-color: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.text};
  padding: 0.2rem 1rem;
  border-radius: 4px;

  @media screen and (min-width: 768px) {
    width: auto;
    min-width: 55%;
    max-width: 100%;
  }
`;
