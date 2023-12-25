import image from "assets/images/404.svg";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    color: ${({ theme }) => theme.text}
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
    margin-top: 3rem;
    font-size: 1.3rem;
  }

  @media screen and (min-width: 1440px) {
    h1 {
        font-size: 2rem;
    }

    a {
        font-size: 1.6rem;
    }
}
`;

const StyledImage = styled.img`
  width: 70vw;
  height: auto;

  @media screen and (min-width: 768px) {
    width: 30vw;
    padding: 2rem 0;
  }
`;

const NotFound = () => {
  return (
    <Wrapper>
        <h1>Page not found</h1>
        <StyledImage src={image} alt="page not found" />
        <a href="/">Go to dashboard</a>
    </Wrapper>
  );
};

export default NotFound;
