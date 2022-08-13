import styled from 'styled-components';

export const StyledSelect = styled.select`
    width: 42%;
    background-color: ${({ theme }) => theme.colors.background};
    padding: .25rem;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.text}
`;