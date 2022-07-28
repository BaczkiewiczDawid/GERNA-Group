import {
  Wrapper,
  InformationsContainer,
  ContentWrapper,
  StyledLineChart
} from "components/Dashboard/Dashboard.style";
import Informations from "components/Dashboard/Informations";
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  {
    name: 'Jan',
    revenue: '430234'
  },
  {
    name: 'Feb',
    revenue: '246857'
  },
  {
    name: 'Mar',
    revenue: '524156'
  },
  {
    name: 'Apr',
    revenue: '365248'
  },
  {
    name: 'May',
    revenue: '685424'
  },
  {
    name: 'Jun',
    revenue: '724653'
  },
  {
    name: 'Jul',
    revenue: '624578'
  },
  {
    name: 'Aug',
    revenue: '425632'
  },
  {
    name: 'Sep',
    revenue: '452687'
  },
  {
    name: 'Oct',
    revenue: '265983'
  },
  {
    name: 'Nov',
    revenue: '542658'
  },

]

const Dashboard = () => {
  return (
    <Wrapper>
    <h1>GERNA Group Dashboard</h1>
      <InformationsContainer>
        <Informations />
        <Informations />
        <Informations />
      </InformationsContainer>
      <ContentWrapper>
        <h2>Total revenue</h2>
        <span>$746,245</span>
        <StyledLineChart width={300} height={300} data={data}>
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </StyledLineChart>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Dashboard;
