import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MessageBox = styled.section`
  width: 100vw;
  height: 70vh;
  overflow-y: scroll;
  padding: 1rem;

  @media screen and (min-width: 768px) {
    width: 60vw;
    height: 70vh;
  }
`;
