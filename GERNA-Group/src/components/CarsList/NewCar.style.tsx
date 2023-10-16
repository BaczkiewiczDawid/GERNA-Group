import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  select {
    margin-top: 1rem;
  }
`;

export const Label = styled.label`
  font-weight: 700;
  margin-top: 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
