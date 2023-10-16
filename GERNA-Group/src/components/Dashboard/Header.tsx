import { StyledHeader } from 'components/Dashboard/Header.style';

type HeaderType = {
  title: string
}

const Header = ({ title }: HeaderType) => {
  return (
    <StyledHeader>
      <h2>{title}</h2>
    </StyledHeader>
  );
};

export default Header;