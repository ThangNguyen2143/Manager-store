import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProductCart from '~/components/ProductCart';

function Cart() {
  const [amount, setAmount] = useState(1);

  return (
    <div className="mt-8 container">
      <div className="flex align-middle  border ">
        <div className=" flex  m-2 ">
          <>
            <Form.Check aria-label="option 1" />
          </>
        </div>
        <div className="  my-2 mr-24 sm:mr-60">Sản Phẩm</div>
        <div className="  my-2 ml-6 sm:ml-96">Đơn Giá</div>
        <div className="  my-2 ml-6 sm:ml-44">Số lượng</div>
        <div className="  my-2 ml-6 sm:ml-44">Số tiền</div>
        <div className="  my-2 ml-6 sm:ml-44">Thao tác</div>
      </div>
      <ProductCart></ProductCart>
      <div className=" flex justify-between border mb-8 ">
        <div className=" py-2 px-4  ">
          <Button variant="outline-info">Xóa</Button>
        </div>
        <div className="flex ">
          <div>
            <div className="p-2">Tổng Thanh toán: 99,000 đ</div>
          </div>
          <div className=" py-2 px-4">
            <Button variant="primary">Mua Hàng</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
