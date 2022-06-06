import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column; 

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95vw;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 3rem;

  @media screen and (min-width: 768px) {
    width: 25vw;
    margin-left: 12rem;
  }

  @media screen and (min-width: 950px) {
    margin-left: 15rem;
  }

  @media screen and (min-width: 1080px) {
    margin-top: 0;
    margin-left: 23rem;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 29rem;
  }
`;

export const Logo = styled.a`
  margin-top: 1rem;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }

`;

export const StyledLink = styled(Link)`
  margin-top: 1.3rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 0.8rem;
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.purple};
  }

  @media screen and (min-width: 768px) {
    font-size: .7rem;
  }

  @media screen and (min-width: 1080px) {
    font-size: 1rem;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;

  width: 55vw;
  height: 5px;
  background-color: #c4c4c4;
  border-radius: 100px;
  margin-top: 1.8rem;

  @media screen and (min-width: 768px) {
    width: 25vw;
  }

  @media screen and (min-width: 1080px) {
    width: 17vw;
  }

  &::before {
    content: '';
    width: 30%;
    height: 5px;
    border-radius: 100px;
    position: absolute;
    right: ${props => props.register ? '16%' : null};
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem;
`;

export const StyledNavLink = styled(Link)`
  text-decoration: none;
    font-weight: ${props => props.purple ? '700' : '300'};
    color: ${props => props.purple ? props.theme.colors.purple : props.theme.colors.black};

    @media screen and (min-width: 1440px) {
      font-size: 1.4rem;
      padding: .5rem 2rem;
    }
`;

export const ImageWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 50vw;
    height: 100vh;
    direction: rtl;
  }

  @media screen and (min-width: 1080px) {
    width: 45vw;
  }
`;

export const StyledBackground = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    height: 100vh;
    object-fit: cover;
  }
`;