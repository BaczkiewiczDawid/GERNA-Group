import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: row;
  margin-top: 0.7rem;
  text-decoration: none;

  img {
    width: 1.5rem;
    height: auto;
    margin-left: ${props => props.active ? '2rem' : '0'};
  }

  p {
    font-weight: 300;
    margin-left: 1rem;
    font-size: 0.85rem;
    opacity: ${props => props.active ? '100%' : '60%'};
    font-weight: ${props => props.active ? '700' : '300'};
    color: ${props => props.active ? props.theme.colors.purple : props.theme.colors.white};
  }

  @media screen and (min-width: 1080px) {
    p {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 1440px) {
    p {
      font-size: 1.2rem;
    }
  }
`;
