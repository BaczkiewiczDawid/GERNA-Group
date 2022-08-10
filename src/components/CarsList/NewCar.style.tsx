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

export const EquipmentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Dropdown = styled.div`
display: block;
  width: 100%;
  min-height: 5rem;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.darkerBackground};
  -webkit-box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 1rem;

  p {
    padding: .4rem 0;
  }
`;
