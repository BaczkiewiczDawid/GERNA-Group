import { Wrapper, Count, FinancialDetails } from 'components/Dashboard/Informations.style';

interface Information {
  title: string,
  count: number | string,
}

const Informations = ({ title, count }: Information) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <Count>{count}</Count>
      <FinancialDetails>
        +13% <span>(30 days)</span>
      </FinancialDetails>
    </Wrapper>
  );
};

export default Informations;