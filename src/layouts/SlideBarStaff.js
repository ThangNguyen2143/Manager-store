import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Button, Image, Offcanvas, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SlideBarStaff() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let currentURL = window.location.pathname;

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faBars} />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header className="justify-content-center">
          <Offcanvas.Title>
            <Image src="/images/Logo.ico" width={'100%'} height={'100%'} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup as="ul">
            <ListGroup.Item disabled>Chức năng nhân viên</ListGroup.Item>
            <ListGroup.Item as="li" action active={currentURL === '/manager/orders'}>
              <Link to={'/manager/orders'}>Quản lý đơn hàng</Link>
            </ListGroup.Item>
            <ListGroup.Item as="li" action active={currentURL === '/new-bill'}>
              {/* Có thể tạo đơn nhập hàng và hoá đơn bán*/}
              <Link to={'/new-bill'}>Tạo đơn hàng</Link>
            </ListGroup.Item>
            <ListGroup.Item as="li" action active={currentURL === '/manager/products'}>
              <Link to={'/manager/products'}>Kho hàng</Link>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup as="ul" className="my-2">
            <ListGroup.Item disabled>Chức năng Quản lý</ListGroup.Item>
            <ListGroup.Item as="li" action>
              Báo cáo doanh thu
            </ListGroup.Item>
            <ListGroup.Item as="li" action>
              Thống kê sản phẩm
            </ListGroup.Item>
            <ListGroup.Item as="li" action>
              Quản lý sản phẩm
            </ListGroup.Item>
            <ListGroup.Item as="li" action>
              <Link to="/manage/users">Quản trị viên</Link>
            </ListGroup.Item>
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default SlideBarStaff;
