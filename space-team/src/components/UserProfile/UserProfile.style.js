import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const ProfileContent = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  align-items: flex-start;
  margin-left: 2rem;

  h3 {
    font-size: 2rem;
    margin-top: 5rem;
    color: ${({ theme }) => theme.text};
  }

  @media screen and (min-width: 768px) {
    margin-left: none;
  }
`;