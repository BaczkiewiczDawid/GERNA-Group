import { StyledHeader } from 'components/Dashboard/Header.style';

type HeaderType = {
  title: string
}

const Header = ({ title }: HeaderType) => {
  return (
    <StyledHeader>
      <h2>{title}</h2>
      {/* <select name="time-period-filter" id="">
        <option value="yearly">Yearly</option>
        <option value="monthly">Monthly</option>
      </select> */}
    </StyledHeader>
  );
};

export default Header;