import styled from "styled-components";
import SearchIcon from "assets/images/search-icon.svg";
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  margin-left: 1.2rem;
  width: 80%;
  margin-top: 1.5rem;
  align-items: center;
  position: relative;

  input {
    background: url(${SearchIcon}) no-repeat;
    background-position: 1rem 50%;
    background-color: transparent;
    border: none;
    border-radius: 10px;
    background-color: white;
    width: 100%;
    color: black;
    padding: 1rem 0rem 1rem 3rem;
    z-index: 2;
  }
`;

export const AccountsList = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  flex-direction: column;
  background-color: white;
  position: absolute;
  left: 0;
  top: 1rem;
  width: 100%;
  min-height: 200px;
  z-index: 1;
  padding: 3rem 1rem 2rem 1rem;
  border: 1px solid rgba(42, 42, 42, 0.2);
  box-shadow: 8px 8px 26px -16px rgba(42, 42, 42, 1);

  @media screen and (min-width: 768px) {
    width: 30vw;
  }

  @media screen and (min-width: 1080px) {
    width: 25vw;
  }

  @media screen and (min-width: 1440px) {
    width: 20vw;
  }

  div {
    margin-top: .5rem;
  }

  p {
    font-size: 0.9rem;
  }

  &:nth-child(n + 1) {
    margin-top: 1rem;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
