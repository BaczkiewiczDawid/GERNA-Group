import { Link } from "react-router-dom";

const Links = ({ setIsOpen }: any) => {
  const handleCloseNav = () => {
    setIsOpen(false)
  }

  return (
    <>
      <Link onClick={handleCloseNav} to="/">D</Link>
      <Link onClick={handleCloseNav} to="/employees/katowice">E</Link>
      <Link onClick={handleCloseNav} to="/sales/new">N</Link>
      <Link onClick={handleCloseNav} to="/cars">C</Link>
    </>
  );
};

export default Links;
