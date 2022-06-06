import styled from "styled-components";

export const PostWrapper = styled.article`
  margin-top: 1rem;
  width: 85vw;
  border-radius: 10px;
  padding: 1.6rem;
  border: 1px solid rgba(42, 42, 42, 0.2);
  box-shadow: 8px 8px 26px -16px rgba(42, 42, 42, 1);

  @media screen and (min-width: 768px) {
    width: 50vw;

    &:nth-child(n + 1) {
      margin-top: 3rem;
    }

    &:nth-child(n + 2) {
      margin-top: 2.5rem;
    }
  }

  @media screen and (min-width: 1080px) {
    width: 40vw;
  }

  @media screen and (min-width: 1440px) {
    width: 30vw;
  }
`;

export const PostImage = styled.img`
  width: 70%;
  height: auto;
  margin-top: 2rem;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.4rem;
  color: ${({ theme }) => theme.colors.black};
  font-weight: 300;
  letter-spacing: 0.05rem;
`;
