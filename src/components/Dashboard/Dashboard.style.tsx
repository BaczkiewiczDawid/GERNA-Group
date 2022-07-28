import styled from "styled-components";

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 17vw;
  }

  h1 {
    color: ${({ theme }) => theme.colors.text};
    margin-top: 2rem;
    margin-left: 2rem;

    @media screen and (min-width: 768px) {
        margin-left: 0;
    }
  }
`;

export const InformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
`;

