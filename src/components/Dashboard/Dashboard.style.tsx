import styled from "styled-components";
import { LineChart } from 'recharts';

export const Wrapper = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 17vw;
  }

  h1 {
    color: ${({ theme }) => theme.colors.text};
    margin-top: 2rem;
    margin-left: 2rem;

    @media screen and (min-width: 768px) {
        margin-left: 0;
    }
  }
`;

export const InformationsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 767px) {
    flex-direction: row;
  }
`;

export const ContentWrapper = styled.div`
  width: 90vw;
  height: 30rem;
  -webkit-box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  box-shadow: 0px 12px 40px -12px rgba(66, 68, 90, 1);
  background-color: ${({ theme }) => theme.colors.darkerBackground};
  padding: 1rem;
  margin: 1rem auto;
  color: ${({ theme }) => theme.colors.text};

  h2 {
    margin-top: .5rem;
    margin-bottom: .5rem;
  }

  @media screen and (min-width: 768px) {
    width: 50vw;
    margin: 0;
    margin-top: 3rem;
  }
`;

export const StyledLineChart = styled(LineChart)`
  width: 90%;
  height: 20rem;
  margin-top: 2rem;
`;
