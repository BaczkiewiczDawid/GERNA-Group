import styled from 'styled-components';

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: ${props => props.dashboard ? '0' : '1.2rem'};
  z-index: 4;
  margin-top: ${props => props.search ? '1rem' : '0'};

  p {
    margin-left: ${props => props.dashboard ? '1.5rem' : '2rem'};
    color: ${props => props.dashboard ? props.theme.colors.black : props.theme.colors.white};
    font-size: 1.1rem;
  }


  @media screen and (min-width: 768px) {
    margin-top: ${props => props.dashboard ? '0' : '1rem'};
  }

  @media screen and (min-width: 1080px) {
    margin-top: ${props => props.dashboard ? '0' : '2rem'};
  }
`;

export const Picture = styled.div`
  width: 45px;
  height: 45px;
  background-color: transparent;
  border-radius: 100px;
  position: relative;
`;

export const StyledProfilePicture = styled.img`
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 100px;
  box-shadow: 8px 8px 26px -16px rgba(42, 42, 42, 1);
`;