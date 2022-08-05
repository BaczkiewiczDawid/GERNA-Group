import styled from 'styled-components';

export const CarsContainer = styled.section`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
`;