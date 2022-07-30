import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 90vw;
  height: auto;
  -webkit-box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  background-color: ${({ theme }) => theme.colors.darkerBackground};
  padding: 1.5rem 1rem;
  margin: 1rem auto;
  color: ${({ theme }) => theme.colors.text};

  @media screen and (min-width: 768px) {
    width: 60vw;
    margin: 4rem 2rem 0 0;
  }

  @media screen and (min-width: 1080px) {
    width: 35vw;
  }
`;

const ContentWrapper = ({ children }: any) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default ContentWrapper;
