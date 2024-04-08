import React, { useState } from 'react';
import Breadcrumbs from '~/components/Breadcrumbs';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

const ProductPage = () => {
  const [images, setImages] = useState({
    img1: './images/CTSP2.png',
    img2: './images/CTSP.png',
    img3: './images/CTSP3.png',
    img4: './images/CTSP4.png',
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [amount, setAmount] = useState(1);

  return (
    <div className="container ">
      <Header />
      <Breadcrumbs />
      <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center my-8">
        <div className="flex flex-col gap-6 lg:w-2/4">
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
        {/* ABOUT */}
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
      <Footer></Footer>
    </div>
  );
};
export default ProductPage;
