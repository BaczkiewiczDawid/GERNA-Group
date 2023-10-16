import { render, screen } from "@testing-library/react";
import SingleEmployee from "components/Employees/SingleEmployee";
import "@testing-library/jest-dom/extend-expect";

const testEmployee = {
  name: "Dawid",
  age: 19,
  position: "Junior sales specialist",
  city: 'Knurów'
};

it("should render employee details", () => {
  render(<SingleEmployee employee={testEmployee} />);

  const name = screen.getByTestId('employee-name');

  expect(name).toHaveTextContent('Dawid');
  expect(testEmployee.age).toBeGreaterThan(18)
});
