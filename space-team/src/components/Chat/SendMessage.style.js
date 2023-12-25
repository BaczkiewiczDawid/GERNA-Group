import styled from 'styled-components';
import Input from "components/Dashboard/Input";

export const StyledInput = styled(Input)`
  && {
    padding: 0.8rem 2rem;
    width: 80%;
    margin: 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 1rem;
  width: 95vw;

  img {
    background-color: ${({ theme }) => theme.purple};
    padding: 0.6rem;
    border-radius: 100px;
    margin-left: 2rem;
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 55vw;
  }
`;
