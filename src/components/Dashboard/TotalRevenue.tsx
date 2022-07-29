import {
  Title,
  Revenue,
} from "components/Dashboard/TotalRevenue.style";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ContentWrapper from 'components/Dashboard/ContentWrapper';

const data = [
  {
    name: "Jan",
    revenue: "430234",
  },
  {
    name: "Feb",
    revenue: "246857",
  },
  {
    name: "Mar",
    revenue: "524156",
  },
  {
    name: "Apr",
    revenue: "365248",
  },
  {
    name: "May",
    revenue: "685424",
  },
  {
    name: "Jun",
    revenue: "724653",
  },
  {
    name: "Jul",
    revenue: "624578",
  },
  {
    name: "Aug",
    revenue: "425632",
  },
  {
    name: "Sep",
    revenue: "452687",
  },
  {
    name: "Oct",
    revenue: "265983",
  },
  {
    name: "Nov",
    revenue: "542658",
  },
];

const TotalRevenue = () => {
  return (
    <ContentWrapper>
      <Title>Total revenue</Title>
      <Revenue>$746,245</Revenue>
      <ResponsiveContainer width="90%" height={300}>
        <LineChart data={data} margin={{ top: 40 }}>
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </ContentWrapper>
  );
};

export default TotalRevenue;
