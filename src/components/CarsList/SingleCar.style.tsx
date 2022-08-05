import styled from "styled-components";

export const ImageWrapper = styled.div`
  object-fit: cover;

  img {
    object-fit: cover;
    width: 90%;
  }
`;

export const Informations = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Price = styled.p`
  font-weight: bold;
`;
