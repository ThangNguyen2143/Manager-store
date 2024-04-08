import { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom'; Cần thiết cho đăng nhập
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '~/hooks/AuthConText';
function LoginForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { setAuthState } = useContext(AuthContext);

  const handleSubmit = (e) => {
    fetch('http://localhost:3001/api/users/login', {
      method: 'POST',
      body: e.currentTarget,
    }).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        localStorage.setItem('accessToken', response.data.token);
        setAuthState({
          username: response.data.username,
          id: response.data.id,
          status: true,
        });
        // useNavigate must call here
      }
    });
  };
  return (
    <>
      <Button variant="outline-primary" onClick={handleShow}>
        Đăng nhập
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Đăng nhập</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} id="loginForm">
            <Form.Group className="mb-3" controlId="formGroupUserName">
              <Form.Label>Tài khoản</Form.Label>
              <Form.Control type="text" placeholder="Nhập tài khoản của bạn" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Mật khẩu</Form.Label>
              <Form.Control type="password" placeholder="Nhập mật khẩu của bạn" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" form="loginForm">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default LoginForm;
