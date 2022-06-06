import styled from 'styled-components';

export const LogoutBtn = styled.button`
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    margin-top: 2rem;
    margin-left: 1rem;
    cursor: pointer;
    
    img {
        width: 1.5rem;
        height: auto;
    }

    p {
        color :${({ theme }) => theme.colors.error};
        margin-left: 1rem;
        font-size: 1.2rem;
    }

    @media screen and (min-width: 768px) {
      position: fixed;
      bottom: 0;
    }
`;