import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const StyledButton = styled.button`
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.red};
    width: auto;
    margin-top: .75rem;
    cursor: pointer;
`;