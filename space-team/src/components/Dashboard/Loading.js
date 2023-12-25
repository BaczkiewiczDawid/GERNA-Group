import styled from 'styled-components';

const Paragraph = styled.p`
    color: ${({ theme }) => theme.text};
    margin-top: 10rem;
`;

const Loading = () => {
    return <Paragraph>Loading...</Paragraph>
}

export default Loading