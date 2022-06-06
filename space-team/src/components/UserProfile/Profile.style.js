import styled from "styled-components";

export const StyledProfile = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Picture = styled.div`
  width: 7rem;
  height: 7rem;
  background-color: transparent;
  border-radius: 100px;
  position: relative;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 100px;
    box-shadow: 8px 8px 26px -16px rgba(42, 42, 42, 1);
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

export const Container = styled.div`
  display: flex;

  h1 {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.black};
  }

  img {
    margin-bottom: 0.4rem;
    margin-left: 3rem;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purple};
  border: none;
  padding: 0rem 3rem;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  z-index: 1;

  img {
    position: absolute;
    left: 1rem;
    width: 10%;
  }

  p {
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    margin-left: 1rem;
    font-size: 0.75rem;
  }
`;
