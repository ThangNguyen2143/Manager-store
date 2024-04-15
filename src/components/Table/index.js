import Table from 'react-bootstrap/Table';

function TableStriped({ header, footer = [], data }) {
  return (
    <Table striped bordered size="md">
      <thead>
        <tr>
          {header.map((content) => {
            return <th>{content}</th>;
          })}
        </tr>
      </thead>
      <tfoot>
        <tr>
          {footer.map((content) => {
            return <td>{content}</td>;
          })}
        </tr>
      </tfoot>
      <tbody>
        {data.map((item) => {
          return (
            <tr>
              {header.map((name) => {
                return <td>{item[name]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TableStriped;
