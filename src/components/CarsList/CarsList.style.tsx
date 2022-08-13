import styled from 'styled-components';
import { Link } from "react-router-dom";


export const CarsContainer = styled.section`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
`;

export const ButtonLink = styled(Link)`
    margin-left: 2rem;
`;