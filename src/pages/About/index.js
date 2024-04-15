import Breadcrumbs from '~/components/Breadcrumbs';
import Card from 'react-bootstrap/Card';
import { CardText, CardTitle } from 'react-bootstrap';
function About() {
  const breadCrumbs = [
    { name: 'Trang chủ', url: '/' },
    { name: 'Về Chúng Tôi', url: '/about' },
  ];
  return (
    <div className="container">
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div>
        <h1 className="text-3xl font-bold my-8">Thông tin về website</h1>
        <p>
          Đây là trang web được tạo ra và phát triển bởi 2 thành viên Nguyễn Huỳnh Công Thẳng và Nguyễn Nhật Long, nhằm
          mục đích rèn luyện khả năng lập trình web và để hoàn thành học phần Niên Luận Ngành Kỹ Thuật Phần Mềm
        </p>
      </div>
      <h1 className="text-3xl font-bold my-8">Thành Viên</h1>
      <div className="flex justify-around ">
        <div className="">
          <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="/images/Thang.jpg" />
            <Card.Body>
              <Card.Title>Nguyễn Huỳnh Công Thẳng</Card.Title>
              <Card.Text>Đôi nét về Thẳng......</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="pt-20">
          <Card style={{ width: '16rem', height: 'auto' }}>
            <Card.Img variant="top" src="/images/logo.jpg" />
            <Card.Body>
              <Card.Title>Nhà Sách Thiên Lân</Card.Title>
              <Card.Text>
                Chuyên cung ứng các loại sách giáo khoa, truyện, tiểu thuyết,... Thiên Lân sức mạnh trí thức
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="">
          <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src="/images/Long.jpg" />
            <Card.Body>
              <Card.Title>Nguyễn Nhật Long</Card.Title>
              <Card.Text>Đôi nét về Long......</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default About;
