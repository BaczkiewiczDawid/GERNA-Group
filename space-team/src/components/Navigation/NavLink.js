import { StyledLink } from "components/Navigation/NavLink.style";

const Link = ({ icon, alt, text, href, active }) => {
  return (
    <StyledLink to={href} active={active}>
      <img src={icon} alt={alt} />
      <p>{text}</p>
    </StyledLink>
  );
};

export default Link;
