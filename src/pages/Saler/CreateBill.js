import { Container, InputGroup, Form } from 'react-bootstrap';
function CreateBill() {
  return (
    <Container>
      <div>
        <div>
          <p>Nhân viên:</p>
          <p>Saler (name nhân viên)</p>
        </div>
        <div>
          <p>Khách hàng:</p>
          <p>Vãng lai (tên khách hàng)</p>
        </div>
      </div>
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Text id="search-item">Tìm sản phẩm</InputGroup.Text>
          <Form.Control placeholder="Nhập tên sản phẩm cần tìm" aria-describedby="search-item" />
        </InputGroup>
      </div>
    </Container>
  );
}

export default CreateBill;
