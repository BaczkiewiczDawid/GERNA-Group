const SingleEmployee = ({ employee, handleSelectEmployee }: any) => {
  return (
    <tr
      key={employee.id * 5000}
      onClick={(employeeID) => handleSelectEmployee(employee.id)}
    >
      <td>{employee.name}</td>
      <td>{employee.age}</td>
      <td>{employee.age}</td>
      <td>{employee.position}</td>
    </tr>
  );
};

export default SingleEmployee;