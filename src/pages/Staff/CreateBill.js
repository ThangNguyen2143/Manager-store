import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Container, InputGroup, Form, Button, Row, Col } from 'react-bootstrap';
import TableStriped from '~/components/Table';
function CreateBill() {
  const [checkedPay, setCheckedPay] = useState('Cash');
  const headerTable = ['Tên', 'Giá', 'Số lượng', 'Thành tiền'];
  // Fake data
  let bodyTable = [
    { Tên: 'Sách 1', Giá: '15000', 'Số lượng': '1', 'Thành tiền': '15000' },
    { Tên: 'Sách 2', Giá: '15000', 'Số lượng': '1', 'Thành tiền': '15000' },
    { Tên: 'Sách 1', Giá: '15000', 'Số lượng': '1', 'Thành tiền': '15000' },
  ];
  return (
    <Container>
      <div className="d-flex justify-content-around">
        <div>
          <span>Nhân viên: </span>
          <span>Saler (name nhân viên)</span>
        </div>
        <div>
          <InputGroup className="mb-3">
            <InputGroup.Text id="search-item">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </InputGroup.Text>
            <Form.Control placeholder="Nhập tên sản phẩm cần tìm" aria-describedby="search-item" />
          </InputGroup>
        </div>
        <div>
          <span>Khách hàng: </span>
          <span>Vãng lai (tên khách hàng)</span>
        </div>
      </div>
      <Container className="border-bottom">
        <Row className="align-items-center">
          <Col>
            <InputGroup>
              <InputGroup.Text id="total-bill">Tổng cộng</InputGroup.Text>
              <Form.Control type="number" aria-describedby="total-bill" value={'0'} readOnly />
              <InputGroup.Text>VNĐ</InputGroup.Text>
            </InputGroup>
          </Col>
          <Col>
            <Button variant="primary">XUẤT HOÁ ĐƠN</Button>
          </Col>

          <Col>
            <h3 className="mb-3">Phương thức thanh toán</h3>
            <InputGroup className="mb-3">
              <InputGroup.Radio
                aria-label="Cash"
                name="payment"
                value="Cash"
                checked={checkedPay === 'Cash'}
                onClick={() => setCheckedPay('Cash')}
              />
              <Form.Control value={'Tiền mặt'} readOnly />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Radio
                aria-label="Banking"
                name="payment"
                value="Banking"
                checked={checkedPay === 'Banking'}
                onClick={() => setCheckedPay('Banking')}
              />
              <Form.Control value={'Chuyển khoản ngân hàng'} readOnly />
            </InputGroup>
          </Col>
        </Row>
      </Container>
      <TableStriped header={headerTable} data={bodyTable} />
    </Container>
  );
}

export default CreateBill;
