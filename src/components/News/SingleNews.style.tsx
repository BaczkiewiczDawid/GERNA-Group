import styled from "styled-components";

export const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 0 auto;
  margin-top: 5rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: auto;
    margin: none;
  }
`;

export const ImageWrapper = styled.div`
  width: 90vw;
  height: 35vh;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 1080px) {
    width: 40%;
    height: 40vh;
  }

  @media screen and (min-width: 1440px) {
    width: 40%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.text};
  width: 60vw;

  p {
    margin-top: 1rem;
  }

  @media screen and (min-width: 768px) {
    margin-top: .5rem;
    margin-left: 2rem;
    margin-right: 4rem;
    width: 50%;
  }

  @media screen and (min-width: 1080px) {
    h2 {
        font-size: 1.8rem;
    }

    p {
        font-size: 1.05rem;
        line-height: 1.6rem;;
    }
  }

  @media screen and (min-width: 1440px) {
    margin-left: 4rem;
    margin-right: 10rem;
  }
`;
