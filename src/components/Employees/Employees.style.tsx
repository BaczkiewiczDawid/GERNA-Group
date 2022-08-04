import styled from "styled-components";
import { Link } from "react-router-dom";

export interface LinkType {
  active?: boolean;
}

export const DepartmentNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem auto;
  width: 80vw;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.background};
    height: 100vh;
    position: fixed;
    left: 12vw;
    width: 25vw;
    margin: 0;
    -webkit-box-shadow: 6px 0px 25px -14px rgba(66, 68, 90, 1);
    -moz-box-shadow: 6px 0px 25px -14px rgba(66, 68, 90, 1);
    box-shadow: 6px 0px 25px -14px rgba(66, 68, 90, 1);

    h2 {
      margin-top: 2rem;
      margin-left: 2rem;
    }

    select {
      display: none;
    }
  }

  @media screen and (min-width: 1080px) {
    left: 6vw;
  }

  @media screen and (min-width: 1080px) {
    width: 20vw;
  }

  @media screen and (min-width: 1440px) {
    width: 15vw;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  th {
    font-size: 0.75rem;
  }

  td {
    font-size: 0.75rem;
    font-weight: 300;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LinksContainer = styled.div<LinkType>`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 2rem;
    margin-left: 2rem;
  }
`;

export const StyledLink = styled(Link)<LinkType>`
  text-decoration: none;
  color: ${(props) =>
    props.active ? props.theme.colors.blue : props.theme.colors.text};
  margin: 0.5rem 0;
  font-size: 0.9rem;
`;

export const ContentContainer = styled.section`
  margin-left: 1rem;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (min-width: 768px) {
    margin-left: 40vw;
  }

  @media screen and (min-width: 1080px) {
    margin-left: 30vw;
  }

  @media screen and (min-width: 1440px) {
    margin-left: 23vw;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
