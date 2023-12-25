import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FriendsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;

  @media screen and (min-width: 768px) {
    align-items: flex-start;
  }
`;

