import { Wrapper, Count, FinancialDetails } from 'components/Dashboard/Informations.style';

const Informations = () => {
  return (
    <Wrapper>
      <h2>New sales</h2>
      <Count>261</Count>
      <FinancialDetails>
        +13% <span>(30 days)</span>
      </FinancialDetails>
    </Wrapper>
  );
};

export default Informations;