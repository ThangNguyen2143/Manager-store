import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Form, Container, Image, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function RegisterForm() {
  const handleSubmit = (event) => {
    // event.preventDefault();
    const form = event.currentTarget;
    const options = {
      method: 'POST',
      body: {
        form,
      },
    };
    // Fetch API
    fetch('http://localhost:3001/api/users/register', options)
      .then((response) => response.json())
      .then((data) => alert(data))
      .catch((error) => console.log(error));
  };
  return (
    <Container fluid>
      <Row>
        <Col xs={7}>
          <Image src="/images/library.jpg" width={'100%'} height={'100%'} />
        </Col>
        <Col>
          <Form className="d-flex flex-column" onSubmit={handleSubmit} typeof="">
            <Image src="/images/Logo.ico" roundedCircle />
            <h2>ĐĂNG KÝ THÀNH VIÊN</h2>
            <Form.Group className="mb-3" controlId="formCustomerName">
              <Form.Label>Họ tên</Form.Label>
              <Form.Control type="text" placeholder="Nhập họ tên của bạn" name="name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCustomerYear">
              <Form.Label>Tháng Năm sinh</Form.Label>
              <Form.Control type="month" pattern="[0-9]{2}-[0-9]{4}" name="year" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCustomerAddress">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control type="text" placeholder="Nhập địa chỉ của bạn" name="address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formCustomerPhone">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control type="text" placeholder="Nhập số điện thoại của bạn" name="phone" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formcccd">
              <Form.Label>Căn cước công dân</Form.Label>
              <Form.Control type="text" placeholder="Nhập số căn cước công dân" name="cccd" />
              <Form.Text className="text-muted">Chúng tôi sẽ không chia sẻ với bất kì ai</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formUserName">
              <Form.Label>Tài khoản</Form.Label>
              <Form.Control type="text" placeholder="Tài khoản đăng nhập" name="username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control type="password" placeholder="Mật khẩu từ 6 đến 255 kí tự" name="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formConfirmPassword">
              <Form.Label>Nhập lại mật khẩu</Form.Label>
              <Form.Control type="password" placeholder="Nhập lại mật khẩu" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Tôi đã đọc và đồng ý điều khoản điều kiện" />
            </Form.Group>
            <Form.Group>
              <Form.Control type="text" value="customer" className="d-none" name="typeRegister" readOnly />
            </Form.Group>
            <Form.Group>
              <Link to={'/'}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
              <Button variant="primary" type="submit" className="mx-4">
                Đăng kí
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterForm;
