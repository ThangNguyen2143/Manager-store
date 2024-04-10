import React, { useState } from 'react';
import Breadcrumbs from '~/components/Breadcrumbs';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const ProductPage = () => {
  const [images, setImages] = useState({
    img1: './images/CTSP2.png',
    img2: './images/CTSP.png',
    img3: './images/CTSP3.png',
    img4: './images/CTSP4.png',
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const breadCrumbs = [
    { name: 'Trang chủ', url: '/' },
    { name: 'Sản phẩm', url: '/productpage' },
  ];

  return (
    <div className="container ">
      <Breadcrumbs breadCrumbs={breadCrumbs} />
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center my-8 ">
        <div className="flex flex-col gap-6 lg:w-2/5">
          <img src={activeImg} alt="" className="w-full h-full aspect-square object-cover rounded-xl" />
          <div className="flex flex-row justify-between h-24">
            <img
              src={images.img1}
              alt=""
              className="w-20 h-20 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img1)}
            />
            <img
              src={images.img2}
              alt=""
              className="w-20 h-20 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img2)}
            />
            <img
              src={images.img3}
              alt=""
              className="w-20 h-20 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img3)}
            />
            <img
              src={images.img4}
              alt=""
              className="w-20 h-20 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img4)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:w-2/4">
          <div>
            <h1 className="text-3xl font-bold">Đám trẻ ở đại dương đen</h1>
          </div>
          <div className="flex">
            <p className="mr-5">Nhà cung cấp:</p> <p className="mr-28">AZ Việt Nam</p>
            <p className="mr-5">Tác Giả:</p> <p className="mr-28">Châu Sa Đáy Mắt</p>
          </div>
          <div className="flex">
            <p className="mr-5">Nhà xuất bản:</p> <p>Thế Giới</p>
          </div>
          <h6 className="text-2xl text-red-600 font-semibold ">199.00 VND</h6>
          <div className="flex flex-row items-center gap-12">
            <div className="flex flex-row items-center">
              <button className="bg-[#3cf] text-black font-semibold py-3 px-16 rounded-xl h-full">
                Thêm Vào Giỏ Hàng
              </button>
            </div>
            <button className="bg-[#3cf] text-black font-semibold py-3 px-16 rounded-xl h-full">Mua Ngay</button>
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-3xl font-bold ml-5">Xin Giớ Thiệu</h1>
      </div>
      <div className="my-8 sm:flex justify-around">
        <Card className="mx-5 w-60">
          <Card.Img variant="top" src="/images/TieuThuyet.jpg" />
          <Card.Body>
            <Card.Title>Một Đời Quản Trị( tái bản 2019)</Card.Title>

            <p>
              <span className="text-red-600">200.000 VND</span>
            </p>
          </Card.Body>
        </Card>
        <Card className="mx-5 w-60">
          <Card.Img variant="top" src="/images/TieuThuyet.jpg" />
          <Card.Body>
            <Card.Title>Một Đời Quản Trị( tái bản 2019)</Card.Title>

            <p>
              <span className="text-red-600">200.000 VND</span>
            </p>
          </Card.Body>
        </Card>
        <Card className="mx-5 w-60">
          <Card.Img variant="top" src="/images/TieuThuyet.jpg" />
          <Card.Body>
            <Card.Title>Một Đời Quản Trị( tái bản 2019)</Card.Title>

            <p>
              <span className="text-red-600">200.000 VND</span>
            </p>
          </Card.Body>
        </Card>
        <Card className="mx-5 w-60">
          <Card.Img variant="top" src="/images/TieuThuyet.jpg" />
          <Card.Body>
            <Card.Title>Một Đời Quản Trị( tái bản 2019)</Card.Title>

            <p>
              <span className="text-red-600">200.000 VND</span>
            </p>
          </Card.Body>
        </Card>
      </div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold ">Thông tin chi tiết</h1>
      </div>
      <div>
        <Table borderless="true" responsive="xl">
          <tbody>
            <tr>
              <td>Mã Hàng</td>
              <td>a1234441</td>
            </tr>
            <tr>
              <td>Nhà Cung cấp</td>
              <td>AZ Việt Nam</td>
            </tr>
            <tr>
              <td>Tác Giả</td>
              <td>Châu Sa Đáy Mắt</td>
            </tr>
            <tr>
              <td>NXB</td>
              <td>Thế Giới</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="border-t-4 border-[#3cf]"></div>
      <div>
        <h1 className="text-xl font-bold">Đám trẻ ở đại dương đen</h1>
        <p>“nỗi buồn không rõ hình thù</p>
        <p>ta cho nó dáng,</p>
        <p>ta thu vào lòng</p> <p>ta ôm mà chẳng đề phòng</p> <p>một ngày nó lớn chất chồng tâm can”</p>{' '}
        <p>“kẻ sống muốn đời cạn</p> <p>người chết muốn hồi sinh </p>
        <p>trần gian bi hài nhỉ?</p> <p>ta còn muốn bỏ mình?”</p>{' '}
        <p>
          Đám trẻ ở đại dương đen là lời độc thoại và đối thoại của những đứa trẻ ở đại dương đen, nơi từng lớp sóng của
          nỗi buồn và tuyệt vọng không ngừng cuộn trào, lúc âm ỉ, khi dữ dội. Những đứa trẻ ấy phải vật lộn trong những
          góc tối tâm lý, với sự u uất đè nén từ tổn thương khi không được sinh ra trong một gia đình toàn vẹn, ấm êm,
          khi phải mang trên đôi vai non dại những gánh nặng không tưởng. Song song đó cũng là quá trình tự chữa lành vô
          cùng khó khăn của đám trẻ, cố gắng vươn mình ra khỏi đại dương đen, tìm cho mình một ánh sáng. Và chính những
          sự nỗ lực xoa dịu chính mình đó đã hóa thành những câu từ trong cuốn sách này, bất kể đau đớn thế nào. Cuốn
          sách được viết bởi Châu Sa Đáy Mắt, một tác giả GenZ mong muốn cùng các bạn trẻ bộc bạch và vỗ về những xúc
          cảm chân thật về gia đình, xã hội và chính bản thân. Sách được phát hành bởi Wavebooks - thương hiệu sách dành
          cho người Việt trẻ.
        </p>
      </div>
    </div>
  );
};
export default ProductPage;
