import styled from "styled-components";

export const List = styled.div`
  width: 100%;
  min-height: 5rem;
  max-height: 13rem;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.darkerBackground};
  -webkit-box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1rem;
  overflow-y: scroll;

  p {
    padding: 0.4rem 0;
    cursor: pointer;
    padding: 1rem;

    &:hover {
      background-color: #e8e8e8;
      transition: .25s;
    }
  }
`;
