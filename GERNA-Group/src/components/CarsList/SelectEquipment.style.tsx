import styled from "styled-components";

export const EquipmentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const EquipmentListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  p {
    padding: .5rem 1rem;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.background};
    border-radius: 5px;
    margin-right: 1rem;
    margin-top: 1rem;
    font-size: .8rem;
    cursor: pointer;
  }
`;