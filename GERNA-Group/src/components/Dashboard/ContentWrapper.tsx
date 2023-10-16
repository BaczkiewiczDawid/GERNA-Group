import styled from "styled-components";

interface ContentType {
  children: any;
  secondary?: boolean;
}

const StyledWrapper = styled.div<ContentType>`
  display: flex;
  flex-direction: column;
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
    width: ${(props) => (props.secondary ? "40vw" : "55vw")};
    margin: 4rem 2rem 0 0;
  }

  @media screen and (min-width: 1080px) {
    width: ${(props) => (props.secondary ? "25vw" : "35vw")};
  }
`;

const ContentWrapper = ({ children, secondary }: ContentType) => {
  return <StyledWrapper secondary={secondary}>{children}</StyledWrapper>;
};

export default ContentWrapper;
