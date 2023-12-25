import styled from 'styled-components';
import Profile from "components/Dashboard/Profile";

export const SingleFriend = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background};
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  width: 95vw;
  cursor: pointer;
  border: 1px solid rgba(42, 42, 42, 0.2);
  box-shadow: 8px 8px 26px -16px rgba(42, 42, 42, 1);

  &:hover {
    background-color: ${({ theme }) => theme.friendHover};
    transition: 0.25s;
  }

  @media screen and (min-width: 768px) {
    width: 50vw;
    margin-top: 2rem;
  }

  @media screen and (min-width: 1080px) {
    width: 40vw;
    margin-top: 2rem;
  }

  @media screen and (min-width: 1440px) {
    width: 30vw;
    margin-top: 2rem;
  }
`;

export const StyledProfile = styled(Profile)`
  width: 70%;

  p {
    color: ${({ theme }) => theme.text};
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
  img {
    width: 25px;
    height: auto;
    cursor: pointer;

    &:nth-child(n+1) {
      margin-left: 2rem;
    }
  }
`;