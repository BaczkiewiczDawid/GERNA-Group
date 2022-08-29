import { Wrapper, Count, FinancialDetails } from 'components/Dashboard/Informations.style';
import { Information } from 'types/types';

const Informations = ({ title, count = 0 }: Information) => {
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