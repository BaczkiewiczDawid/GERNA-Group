import styled from "styled-components";

type CarContainerType = {
  secondary?: boolean;
};

export const CarContainer = styled.div<CarContainerType>`
  width: 90vw;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.text};

  img {
    width: 100%;
    height: auto;
  }

  h2 {
    font-size: 2rem;
  }

  p {
    font-size: 0.9rem;
    font-weight: 300;
  }

  span {
    font-weight: 700;
    font-size: 1.5rem;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    margin-top: 3rem;
    justify-content: space-between;
    flex-direction: ${(props) => (props.secondary ? "row-reverse" : "row")};

    img {
      width: 35%;
      object-fit: contain;
      margin-right: ${props => props.secondary ? '8rem' : '0'};
    }
  }

  @media screen and (min-width: 1080px) {
    img {
      width: 40%;
      object-fit: contain;
      margin-right: ${props => props.secondary ? '12rem' : '0'};
    }
  }
`;

export const Details = styled.div<CarContainerType>`
  @media screen and (min-width: 768px) {
    margin-right: ${(props) => (props.secondary ? "0" : "4rem")};
    width: ${(props) => (props.secondary ? "30%" : "50%")};
  }

  @media screen and (min-width: 1080px) {
    margin-right: ${(props) => (props.secondary ? "0" : "8rem")};
    width: ${(props) => (props.secondary ? "20%" : "40%")};
  }
`;

export const ModelInfo = styled.div`
  margin-bottom: 1.3rem;
`;

export const Description = styled.p`
  letter-spacing: 0.75px;
  line-height: 1.2rem;
  width: 90%;
  margin-bottom: 2rem;
`;
