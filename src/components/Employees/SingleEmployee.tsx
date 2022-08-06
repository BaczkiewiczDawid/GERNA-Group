import styled from 'styled-components';

const Row = styled.tr`
  cursor: pointer;
`;

const SingleEmployee = ({ employee, handleSelectEmployee }: any) => {
  return (
    <Row
      key={employee.id * 5000}
      onClick={() => handleSelectEmployee(employee.id)}
    >
      <td>{employee.name}</td>
      <td>{employee.age}</td>
      <td>{employee.age}</td>
      <td>{employee.position}</td>
    </Row>
  );
};

export default SingleEmployee;