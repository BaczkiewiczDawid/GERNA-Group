import React from 'react'
import styled from 'styled-components';

const ErrorMessage = styled.p`
    color: ${({ theme }) => theme.colors.red};
`;

const Error = () => {
  return (
    <ErrorMessage>Whoops! Something went wrong</ErrorMessage>
  )
}

export default Error
