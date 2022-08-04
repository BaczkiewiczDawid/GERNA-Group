import { LinksContainer, StyledLink } from "./Employees.style";
import { useParams, Link } from "react-router-dom";
import Button from "components/Employees/Button";

const DepartmentNavigation = () => {
  const { department } = useParams();

  const DepartmentsList = [
    {
      name: "Katowice",
      link: "katowice",
    },
    {
      name: "Wrocław",
      link: "wroclaw",
    },
    {
      name: "Olsztyn",
      link: "olsztyn",
    },
    {
      name: "Kraków",
      link: "krakow",
    },
    {
      name: "Warszawa",
      link: "warszawa",
    },
    {
      name: "Gdańsk",
      link: "gdansk",
    },
  ];

  return (
    <LinksContainer>
      {DepartmentsList.map((el) => {
        return (
          <StyledLink
            to={`/employees/${el.link}`}
            active={department === el.link ? true : false}
          >
            GERNA Group {el.name}
          </StyledLink>
        );
      })}
      <Link to="/employees/new">
        <Button text="Add new employee" />
      </Link>
    </LinksContainer>
  );
};

export default DepartmentNavigation;
