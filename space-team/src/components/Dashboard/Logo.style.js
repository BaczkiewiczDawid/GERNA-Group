import styled from 'styled-components'

export const StyledLogo = styled.img`
  margin-top: 2rem;
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 10rem;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    width: 17rem;
  }

  @media screen and (min-width: 1080px) {
    margin-top: 3rem;
  }
`;
