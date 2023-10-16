import styled from 'styled-components';

export const Label = styled.label`
    font-size: 1.3rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

export const Select = styled.select`
    margin-top: 1rem;
    padding: .5rem;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};

    option {
        font-size: .9rem;
    }
`;