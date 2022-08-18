import { Link } from "react-router-dom";
import useAuth from "hooks/useAuth";

const Links = ({ setIsOpen }: any) => {
  const isAuthenticated = useAuth();

  const handleCloseNav = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Link onClick={handleCloseNav} to="/">D</Link>
      {isAuthenticated.role === 'admin' && <Link onClick={handleCloseNav} to="/employees/katowice">E</Link>}
      <Link onClick={handleCloseNav} to="/sales/new">N</Link>
      <Link onClick={handleCloseNav} to="/cars">C</Link>
    </>
  );
};

export default Links;
