import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

export const Logo = styled.img`
  margin-top: 2rem;
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-block;
    width: 14rem;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    width: 17rem;
  }

  @media screen and (min-width: 1080px) {
    margin-top: 3rem;
  }
`;

export const PostsContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
`;