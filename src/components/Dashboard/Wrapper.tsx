import styled from "styled-components";

const StyledWrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 17vw;
  }

  h1 {
    color: ${({ theme }) => theme.colors.text};
    margin-top: 2rem;
    margin-left: 2rem;

    @media screen and (min-width: 768px) {
      margin-left: 0;
    }
  }
`;
const Wrapper = ({ children }: any) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

export default Wrapper;
