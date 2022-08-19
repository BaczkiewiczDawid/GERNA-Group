import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    label {
        margin-top: 1rem;
        font-weight: 700;
    }
    
    textarea {
        resize: none;
        height: 8rem;
        margin-top: 2rem;
        padding: 1rem;
        color: ${({ theme }) => theme.colors.text};
    }
`;