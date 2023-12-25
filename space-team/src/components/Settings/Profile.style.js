import styled from 'styled-components';

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3rem;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.text};

  img {
    width: 6rem;
    height: 6rem;
    border-radius: 100px;
  }

  div {
    flex-direction: column;
    margin-left: 2rem;

    p:nth-child(n + 1) {
      font-weight: 700;
    }

    p:nth-child(n + 2) {
      font-weight: 300;
    }
  }
`;

export const ProfileWrapper = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;