import styled from "styled-components";

export const StyledNav = styled.nav`
    width: 100vw;
    height: 4rem;
    background-color: ${({ theme }) => theme.colors.blue};
    border-bottom-left-radius: .5rem;
    border-bottom-right-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
`;