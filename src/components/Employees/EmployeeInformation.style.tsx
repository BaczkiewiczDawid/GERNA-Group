import styled from 'styled-components';

export const Label = styled.label`
    font-weight: 700;
    margin-top: 1rem;
`;

export const ErrorMessage = styled.p`
    color: ${({ theme }) => theme.colors.red};
`;