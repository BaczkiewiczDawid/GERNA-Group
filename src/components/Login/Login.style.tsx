import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80vw;
  position: absolute;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  @media screen and (min-width: 768px) {
    width: 40vw;
  }
`;

export const Header = styled.h1`
    font-weight: 300;
    margin-bottom: 1rem;
    
    span {
        font-weight: 700
    }
`;